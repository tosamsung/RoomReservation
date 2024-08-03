package com.hotelbooking.HotelBooking.repository;

import com.hotelbooking.HotelBooking.entity.property.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long>{
}
