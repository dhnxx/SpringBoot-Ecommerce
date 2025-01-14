package com.example.backend.cart.controller;

import com.example.backend.cart.CartItems;
import com.example.backend.cart.service.CartService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping("/{userId}/items")
    public ResponseEntity<List<CartItems>> getItems(@PathVariable Long userId) {
        List<CartItems> cartItems = cartService.getItems(userId);
        return ResponseEntity.ok(cartItems);
    }

    @PostMapping("/{userId}/items/{productId}")
    public ResponseEntity<CartItems> addItem(
        @PathVariable Long userId,
        @PathVariable Long productId,
        @RequestParam int quantity
    ) {
        CartItems cartItem = cartService.addItem(userId, productId, quantity);
        return ResponseEntity.ok(cartItem);
    }

    @DeleteMapping("/{userId}/items/{productId}")
    public ResponseEntity<String> removeItem(
        @PathVariable Long userId,
        @PathVariable Long productId
    ) {
        cartService.removeItem(userId, productId);
        return ResponseEntity.ok("Product removed from cart successfully");
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> clearCart(@PathVariable Long userId) {
        cartService.clearCart(userId);
        return ResponseEntity.ok("Cart emptied successfully");
    }
}
