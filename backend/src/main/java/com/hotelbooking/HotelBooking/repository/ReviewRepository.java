package com.hotelbooking.HotelBooking.repository;

import com.hotelbooking.HotelBooking.entity.property.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
