package com.example.backend.products.repository;

import com.example.backend.products.Categories;
import com.example.backend.products.Products;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoriesRepository extends JpaRepository<Categories, Long> {
    @Query("SELECT p FROM Products p WHERE p.category.name = :name")
    List<Products> findProductsByCategoryName(@Param("name") String name);
}
