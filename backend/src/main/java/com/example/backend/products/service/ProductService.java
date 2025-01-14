package com.example.backend.products.service;

import com.example.backend.products.Categories;
import com.example.backend.products.Products;
import com.example.backend.products.data.CreateProduct;
import com.example.backend.products.data.DisplayProduct;
import com.example.backend.products.data.SpecificProduct;
import com.example.backend.products.repository.CategoriesRepository;
import com.example.backend.products.repository.ProductsRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.example.backend.reviews.data.DisplayReview;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductsRepository productsRepository;
    private final CategoriesRepository categoriesRepository;

    public List<DisplayProduct> getAll() {
        return productsRepository.findAll()
                .stream()
                .map(DisplayProduct::toDisplayProduct)
                .toList();
    }

    public SpecificProduct getById(Long id) {
        Products product = productsRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        List<Products> relatedProducts = productsRepository
                .findRandomProductsByCategory(product.getCategory().getId(), product.getId());

        return new SpecificProduct(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getPrice(),
                product.getStock(),
                product.getImages(),
                product.getCategory().getName(),
                product.getReviews().stream().map(DisplayReview::toDisplayReview).toList(),
                relatedProducts.stream().map(DisplayProduct::toDisplayProduct).toList());
    }

    public Products create(CreateProduct createProduct) {
        Products product = new Products();
        product.setName(createProduct.getName());
        product.setDescription(createProduct.getDescription());
        product.setPrice(createProduct.getPrice());
        product.setStock(createProduct.getStock());
        product.setImages(createProduct.getImages());

        Categories category = categoriesRepository.findById(createProduct.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));
        product.setCategory(category);

        return productsRepository.save(product);
    }

    public List<Products> createMultiple(List<CreateProduct> createProducts) {
        return createProducts.stream()
                .map(this::create)
                .toList();
    }

    public Products delete(Long id) {
        Products product = productsRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        productsRepository.delete(product);
        return product;
    }

    public Products update(Long id, CreateProduct product) {
        Products existingProduct = productsRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        existingProduct.setName(product.getName());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setStock(product.getStock());
        existingProduct.setImages(product.getImages());
        return productsRepository.save(existingProduct);
    }

    public List<Products> findByName(String name) {
        return productsRepository.findByName(name);
    }

}
