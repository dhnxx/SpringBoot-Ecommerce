package com.example.backend.products.repository;

import com.example.backend.products.Products;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductsRepository extends JpaRepository<Products, Long> {
    @Query("SELECT p FROM Products p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<Products> findByName(@Param("name") String name);

    @Query(value = "SELECT * FROM products p WHERE p.category_id = :categoryId AND p.id != :currentId ORDER BY RAND() LIMIT 4", nativeQuery = true)
    List<Products> findRandomProductsByCategory(@Param("categoryId") Long categoryId,
            @Param("currentId") Long currentId);
}