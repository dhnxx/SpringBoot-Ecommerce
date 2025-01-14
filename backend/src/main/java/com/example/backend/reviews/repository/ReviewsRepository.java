package com.example.backend.reviews.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.reviews.Reviews;

public interface ReviewsRepository extends JpaRepository<Reviews, Long> {

}
