package com.hotelbooking.HotelBooking.service.userservice;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.enums.CustomerStatus;
import com.hotelbooking.HotelBooking.repository.UserRepository;

@Service
public class UserAuthService {
	@Autowired
	UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public String signup(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setCreateDate(new Date());
		user.setCustomerStatus(CustomerStatus.ACTIVE);
		user.setImage("https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg");
		try {
			// Save the user
			userRepository.save(user);
		} catch (DataIntegrityViolationException e) {
			// Inspect the exception message to determine which constraint was violated
			String message = e.getMostSpecificCause().getMessage();
			if (message.contains("username")) {
				return "Username already exists!";
			} else if (message.contains("email")) {
				return "Email already exists!";
			} else {
				return "A user with this username or email already exists!";
			}
		}

		return "User registered successfully!";
	}
}
