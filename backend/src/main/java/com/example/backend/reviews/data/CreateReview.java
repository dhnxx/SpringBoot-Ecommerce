package com.example.backend.reviews.data;

import lombok.Data;

@Data
public class CreateReview {

    private Long productId;
    private Long userId;
    private String comment;
    private int rating;

}
