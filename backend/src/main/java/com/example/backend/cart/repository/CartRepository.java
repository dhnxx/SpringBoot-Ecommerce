package com.example.backend.cart.repository;

import com.example.backend.cart.Cart;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CartRepository extends JpaRepository<Cart, Long> {
    @Query("SELECT c FROM Cart c JOIN FETCH c.items WHERE c.user.id = :userId")
    Optional<Cart> findCartByUserId(@Param("userId") Long userId);

    @Modifying
    @Query("DELETE FROM CartItems ci WHERE ci.cart = :cart")
    void emptyCart(@Param("cart") Cart cart);
}
