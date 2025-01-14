package com.example.backend.reviews.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.example.backend.reviews.Reviews;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DisplayReview {
    private Long id;
    private String comment;
    private int rating;
    private String firstName;
    private String lastName;
    private String avatarUrl;

    public static DisplayReview toDisplayReview(Reviews review) {
        if (review == null) {
            return null;
        }

        return new DisplayReview(
                review.getId(),
                review.getComment(),
                review.getRating(),
                review.getUser() != null ? review.getUser().getFirstName() : null,
                review.getUser() != null ? review.getUser().getLastName() : null,
                review.getUser() != null ? review.getUser().getProfileImageUrl() : null
        );
    }
}