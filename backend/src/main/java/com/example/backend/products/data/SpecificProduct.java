package com.example.backend.products.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import com.example.backend.products.Products;
import java.util.List;
import com.example.backend.reviews.data.DisplayReview;

@Data
@AllArgsConstructor
public class SpecificProduct {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private Integer stock;
    private List<String> images;
    private String category;
    private List<DisplayReview> reviews;
    private List<DisplayProduct> relatedProducts;

    public SpecificProduct(Products product) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.stock = product.getStock();
        this.images = product.getImages();
        this.category = product.getCategory().getName();
    }
}
