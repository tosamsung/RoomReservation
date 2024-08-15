package com.hotelbooking.HotelBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelbooking.HotelBooking.entity.property.Facility;

public interface FacilityRepository extends JpaRepository<Facility, String> {
}
