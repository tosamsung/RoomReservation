package com.hotelbooking.HotelBooking.repository;

import com.hotelbooking.HotelBooking.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
