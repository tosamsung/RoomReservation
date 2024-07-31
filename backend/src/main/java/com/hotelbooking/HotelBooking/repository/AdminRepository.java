package com.hotelbooking.HotelBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelbooking.HotelBooking.entity.employee.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}
