package com.example.backend.products.controller;

import com.example.backend.products.Categories;
import com.example.backend.products.Products;
import com.example.backend.products.service.CategoryService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RequestMapping("/api/categories")
@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public List<Categories> getAllCategories() {
        return categoryService.getAll();
    }

    @PostMapping("create/{name}")
    public Categories createCategory(@PathVariable String name) {
        return categoryService.create(name);
    }

    @PostMapping("{id}")
    public Categories updateCategory(@PathVariable Long id, String name) {
        return categoryService.update(id, name);
    }

    @GetMapping("{name}/products")
    public List<Products> getProductsByCategory(@PathVariable String name) {
        return categoryService.getByCategory(name);
    }

    @DeleteMapping("{id}")
    public void deleteCategory(@PathVariable Long id) {
        categoryService.delete(id);
    }
}
