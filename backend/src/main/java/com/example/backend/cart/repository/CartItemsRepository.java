package com.example.backend.cart.repository;

import com.example.backend.cart.Cart;
import com.example.backend.cart.CartItems;
import com.example.backend.products.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CartItemsRepository extends JpaRepository<CartItems, Long> {
    CartItems findByCartAndProduct(Cart cart, Products product);

    @Modifying
    @Query("DELETE FROM CartItems ci WHERE ci.cart = :cart")
    void emptyCart(@Param("cart") Cart cart);

    CartItems findByCart(Cart cart);
}
