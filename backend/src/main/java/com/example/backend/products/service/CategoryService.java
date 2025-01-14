package com.example.backend.products.service;

import com.example.backend.products.Categories;
import com.example.backend.products.Products;
import com.example.backend.products.repository.CategoriesRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoriesRepository categoriesRepository;

    public List<Categories> getAll() {
        return categoriesRepository.findAll();
    }

    public Categories create(String name) {
        Categories category = new Categories();
        category.setName(name);
        return categoriesRepository.save(category);
    }

    public Categories update(Long id, String name) {
        Categories category = categoriesRepository
            .findById(id)
            .orElseThrow(() -> new RuntimeException("Category not found"));
        category.setName(name);
        return categoriesRepository.save(category);
    }

    public void delete(Long id) {
        categoriesRepository.deleteById(id);
    }

    public List<Products> getByCategory(String name) {
        return categoriesRepository.findProductsByCategoryName(name);
    }
}
