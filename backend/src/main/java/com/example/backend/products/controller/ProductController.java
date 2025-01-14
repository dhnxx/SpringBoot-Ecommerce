package com.example.backend.products.controller;

import com.example.backend.products.Products;
import com.example.backend.products.data.CreateProduct;
import com.example.backend.products.data.DisplayProduct;
import com.example.backend.products.data.SpecificProduct;
import com.example.backend.products.service.ProductService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<DisplayProduct>> getAll() {
        return ResponseEntity.ok(productService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SpecificProduct> getById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getById(id));
    }

    @PostMapping
    public ResponseEntity<Products> create(@RequestBody CreateProduct product) {
        return ResponseEntity.ok(productService.create(product));
    }

    @PostMapping("/multiple")
    public ResponseEntity<List<Products>> createMultiple(@RequestBody List<CreateProduct> products) {
        return ResponseEntity.ok(productService.createMultiple(products));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Products> delete(@PathVariable Long id) {
        return ResponseEntity.ok(productService.delete(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Products> update(
            @PathVariable Long id,
            @RequestBody CreateProduct product) {
        return ResponseEntity.ok(productService.update(id, product));
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<Products>> findByName(
            @PathVariable String name) {
        return ResponseEntity.ok(productService.findByName(name));
    }
}
