package com.hotelbooking.HotelBooking.service.userservice;

import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.dto.AuthUser;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.enums.CustomerStatus;
import com.hotelbooking.HotelBooking.repository.UserRepository;
import com.hotelbooking.HotelBooking.security.JWTUtils;

@Service
public class UserAuthService {
	@Autowired
	UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JWTUtils jwtUtils;

	@Autowired
	private AuthenticationManager authenticationManager;

	public AuthUser signin(User user) {
		try {
			authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
			var usernameUser = userRepository.findByUsername(user.getUsername()).orElseThrow();
			var jwt = jwtUtils.generateAccessToken(usernameUser);
			var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), usernameUser);
			
			return new AuthUser(jwt, refreshToken);
			
		}catch (AuthenticationException e) {
            throw new RuntimeException("Invalid username or password!", e);
        } catch (Exception e) {
            throw new RuntimeException("An error occurred during sign in!", e);
        }
	}

	public String signup(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setCreateDate(new Date());
		user.setCustomerStatus(CustomerStatus.ACTIVE);
		user.setImage("https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg");
		try {
			// Save the user
			System.out.println("singup suuccs");
			userRepository.save(user); 
			
		} catch (Exception e) {
			e.printStackTrace();
		}
//		catch (DataIntegrityViolationException e) {
//			// Inspect the exception message to determine which constraint was violated
//			String message = e.getMostSpecificCause().getMessage();
//			if (message.contains("username")) {
//				return "Username already exists!";
//			} else if (message.contains("email")) {
//				return "Email already exists!";
//			} else {
//				return "A user with this username or email already exists!";
//			}
//		}

		return "User registered successfully!";
	}
}
