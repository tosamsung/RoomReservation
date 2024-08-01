package com.hotelbooking.HotelBooking.repository;

import com.hotelbooking.HotelBooking.entity.property.BreakfastDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BreakfastDetailRepository extends JpaRepository<BreakfastDetail, Long> {
}