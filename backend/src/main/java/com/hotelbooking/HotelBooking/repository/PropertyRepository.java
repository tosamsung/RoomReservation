package com.hotelbooking.HotelBooking.repository;

import com.hotelbooking.HotelBooking.entity.property.Post;
import com.hotelbooking.HotelBooking.entity.property.Property;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertyRepository extends JpaRepository<Property, Long> {
}
