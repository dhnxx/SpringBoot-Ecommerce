package com.example.backend.reviews.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.backend.reviews.Reviews;
import com.example.backend.reviews.service.ReviewService;
import lombok.RequiredArgsConstructor;
import com.example.backend.reviews.data.CreateReview;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody CreateReview createReview) {
        try {
            Reviews review = reviewService.create(createReview);
            return ResponseEntity.ok(review);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage()); // Return 400 for invalid input
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage()); // Return 404 for missing entities
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        reviewService.delete(id);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Reviews> update(@PathVariable Long id, CreateReview createReview) {
        return ResponseEntity.ok(reviewService.update(id, createReview));
    }
}
