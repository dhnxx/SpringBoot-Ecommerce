package com.example.backend.reviews.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.example.backend.reviews.repository.ReviewsRepository;
import com.example.backend.users.repository.UserRepository;
import com.example.backend.reviews.Reviews;
import com.example.backend.reviews.data.CreateReview;
import com.example.backend.products.Products;
import com.example.backend.products.repository.ProductsRepository;
import com.example.backend.users.User;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewsRepository reviewsRepository;
    private final ProductsRepository productRepository;
    private final UserRepository userRepository;

public Reviews create(CreateReview createReview) {
    if (createReview.getProductId() == null || createReview.getUserId() == null) {
        throw new IllegalArgumentException("Product ID and User ID must not be null");
    }

    Products product = productRepository.findById(createReview.getProductId())
            .orElseThrow(() -> new RuntimeException("Product not found with ID: " + createReview.getProductId()));
    User user = userRepository.findById(createReview.getUserId())
            .orElseThrow(() -> new RuntimeException("User not found with ID: " + createReview.getUserId()));

    Reviews review = new Reviews();
    review.setComment(createReview.getComment());
    review.setRating(createReview.getRating());
    review.setProduct(product);
    review.setUser(user);

    return reviewsRepository.save(review);
}

    public void delete(Long id) {
        reviewsRepository.deleteById(id);
    }

    public Reviews update(Long id, CreateReview createReview) {
        Reviews review = reviewsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found with id: " + id));

        if (createReview.getComment() != null) {
            review.setComment(createReview.getComment());
        }
        if (createReview.getRating() != 0) {
            review.setRating(createReview.getRating());
        }

        return reviewsRepository.save(review);
    }

}
