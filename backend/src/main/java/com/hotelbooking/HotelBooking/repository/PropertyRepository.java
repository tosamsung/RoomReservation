package com.hotelbooking.HotelBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelbooking.HotelBooking.entity.property.Property;

public interface PropertyRepository extends JpaRepository<Property, Long>{
}