package com.example.backend.products.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import com.example.backend.products.Products;

@Data
@AllArgsConstructor
public class DisplayProduct {
    private Long id;
    private String name;
    private Double price;
    private String image;
    private String category;

    public static DisplayProduct toDisplayProduct(Products product) {

        String image = product.getImages().isEmpty() ? "/placeholder.svg?height=200&width=200"
                : product.getImages().get(0);

        return new DisplayProduct(
                product.getId(),
                product.getName(),
                product.getPrice(),
                image,
                product.getCategory().getName());
    }
}
