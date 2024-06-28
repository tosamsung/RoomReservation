package com.hotelbooking.HotelBooking.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelbooking.HotelBooking.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByUsername(String username);
}
