package com.example.backend.cart.service;

import com.example.backend.cart.Cart;
import com.example.backend.cart.CartItems;
import com.example.backend.cart.repository.CartItemsRepository;
import com.example.backend.cart.repository.CartRepository;
import com.example.backend.products.Products;
import com.example.backend.products.repository.ProductsRepository;
import com.example.backend.users.User;
import com.example.backend.users.repository.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemsRepository cartItemsRepository;
    private final UserRepository userRepository;
    private final ProductsRepository productsRepository;

    public Cart createCart(Long userId) {
        User user = userRepository
            .findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));

        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    public List<CartItems> getItems(Long userId) {
        Cart cart = getCart(userId);
        return cart.getItems();
    }

    @Transactional
    public CartItems addItem(Long userId, Long productId, int quantity) {
        Cart cart = getCart(userId);
        Products product = productsRepository
            .findById(productId)
            .orElseThrow(() -> new RuntimeException("Product not found"));

        CartItems existingItem = cartItemsRepository.findByCartAndProduct(
            cart,
            product
        );

        if (existingItem != null) {
            existingItem.setQuantity(existingItem.getQuantity() + quantity);
            return cartItemsRepository.save(existingItem);
        }

        CartItems newItem = new CartItems();
        newItem.setCart(cart);
        newItem.setProduct(product);
        newItem.setQuantity(quantity);

        return cartItemsRepository.save(newItem);
    }

    private Cart getCart(Long userId) {
        return cartRepository
            .findCartByUserId(userId)
            .orElseThrow(() ->
                new RuntimeException("Cart not found for user ID: " + userId)
            );
    }

    public void removeItem(Long userId, Long productId) {
        Cart cart = getCart(userId);
        Products product = productsRepository
            .findById(productId)
            .orElseThrow(() -> new RuntimeException("Product not found"));

        CartItems item = cartItemsRepository.findByCartAndProduct(
            cart,
            product
        );

        if (item == null) {
            throw new RuntimeException(
                "Product not found in the cart with ID: " + productId
            );
        }

        cartItemsRepository.delete(item);
    }

    @Transactional
    public void clearCart(Long userId) {
        Cart cart = getCart(userId);
        cartItemsRepository.emptyCart(cart);
    }
}
