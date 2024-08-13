package com.hotelbooking.HotelBooking.service.userservice;

import com.hotelbooking.HotelBooking.dto.ReviewDTO;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.entity.property.Post;
import com.hotelbooking.HotelBooking.entity.property.Review;
import com.hotelbooking.HotelBooking.exceptions.DataNotFoundException;
import com.hotelbooking.HotelBooking.repository.PostRepository;
import com.hotelbooking.HotelBooking.repository.ReviewRepository;
import com.hotelbooking.HotelBooking.repository.UserRepository;
import com.hotelbooking.HotelBooking.responses.ReviewResponse;
import com.hotelbooking.HotelBooking.service.serviceinterface.ReviewService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ModelMapper modelMapper;
    private final ReviewRepository reviewRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    @Override
    public Page<ReviewResponse> find(Pageable pageable) {
        return reviewRepository.findAll(pageable).map(review -> modelMapper.map(review, ReviewResponse.class));
    }

    @Override
    public ReviewResponse create(ReviewDTO reviewDTO) throws DataNotFoundException {
        User user = getUserById(reviewDTO.getUserId());
        Post post = getPostById(reviewDTO.getPostId());
        Review review = Review.builder()
                .cleanlinessRate(reviewDTO.getCleanlinessRate())
                .comfortRate(reviewDTO.getComfortRate())
                .comment(reviewDTO.getComment())
                .facilitiesRate(reviewDTO.getFacilitiesRate())
                .staffRate(reviewDTO.getStaffRate())
                .user(user).post(post).build();
        return modelMapper.map(reviewRepository.save(review), ReviewResponse.class);
    }

    @Override
    public ReviewResponse update(ReviewDTO reviewDTO, Long id) throws DataNotFoundException {
        Review review = getReviewById(id);
        review.setComment(reviewDTO.getComment());
        review.setComfortRate(reviewDTO.getComfortRate());
        review.setCleanlinessRate(reviewDTO.getCleanlinessRate());
        review.setFacilitiesRate(reviewDTO.getFacilitiesRate());
        review.setStaffRate(reviewDTO.getStaffRate());
        return modelMapper.map(reviewRepository.save(review), ReviewResponse.class);
    }

    @Override
    public void delete(Long id) throws DataNotFoundException {
        Review review = getReviewById(id);
        reviewRepository.delete(review);
    }

    @Override
    public ReviewResponse findById(Long id) throws DataNotFoundException {
        return modelMapper.map(getReviewById(id), ReviewResponse.class);
    }
    private Review getReviewById(Long reviewId) throws DataNotFoundException {
        return reviewRepository.findById(reviewId).orElseThrow(() -> new DataNotFoundException("Could not found review with id: " + reviewId));
    }
    private Post getPostById(Long postId) throws DataNotFoundException {
        return postRepository.findById(postId).orElseThrow(() -> new DataNotFoundException("Could not found post with id: " + postId));
    }
    private User getUserById(Long userId) throws DataNotFoundException {
        return userRepository.findById(userId).orElseThrow(() -> new DataNotFoundException("Could not found user with id: " + userId));
    }
}
