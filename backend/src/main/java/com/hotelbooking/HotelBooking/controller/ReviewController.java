package com.hotelbooking.HotelBooking.controller;

import com.hotelbooking.HotelBooking.dto.ReviewDTO;
import com.hotelbooking.HotelBooking.exceptions.DataNotFoundException;
import com.hotelbooking.HotelBooking.responses.PageResponse;
import com.hotelbooking.HotelBooking.responses.ReviewResponse;
import com.hotelbooking.HotelBooking.service.serviceinterface.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
@Validated
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping
    public ResponseEntity<?> getAllReviews(@RequestParam(required = false,defaultValue = "10") int size,
                                                              @RequestParam(required = false,defaultValue = "0") int page) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<ReviewResponse> reviewsPage = reviewService.find(pageRequest);
        return ResponseEntity.ok(PageResponse.<ReviewResponse>builder()
                .content(reviewsPage.getContent())
                .totalPages(reviewsPage.getTotalPages())
                .totalElements(reviewsPage.getTotalElements())
                .build());
    }

    // Get a specific review by ID
    @GetMapping("/{id}")
    public ResponseEntity<ReviewResponse> getReviewById(@PathVariable Long id) throws DataNotFoundException {
        ReviewResponse review = reviewService.findById(id);
        return ResponseEntity.ok(review);
    }

    // Create a new review
    @PostMapping()
    public ResponseEntity<ReviewResponse> createReview(@Valid @RequestBody ReviewDTO reviewDTO) throws DataNotFoundException {
        ReviewResponse review = reviewService.create(reviewDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(review);
    }

    // Update an existing review
    @PutMapping("/{id}")
    public ResponseEntity<ReviewResponse> updateReview(@PathVariable Long id, @Valid @RequestBody ReviewDTO reviewDTO) throws DataNotFoundException {
        ReviewResponse review = reviewService.update(reviewDTO, id);
        return ResponseEntity.ok(review);
    }

    // Delete a review by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long id) throws DataNotFoundException {
        reviewService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
