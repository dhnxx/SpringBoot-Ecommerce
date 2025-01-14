package com.example.backend.cart;

import com.example.backend.entity.AbstractEntity;
import com.example.backend.products.Products;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CartItems extends AbstractEntity {

    private Cart cart;
    private Products product;
    private int quantity;
}
