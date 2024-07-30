package com.hotelbooking.HotelBooking.repository;

import java.awt.print.Pageable;
import java.util.Optional;
import org.springframework.data.domain.Page;
import com.hotelbooking.HotelBooking.responses.UserResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelbooking.HotelBooking.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByUsername(String username);

	boolean existsByUsername(String username);
	boolean existsByEmail(String username);
}
