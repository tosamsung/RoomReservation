package com.hotelbooking.HotelBooking.service.userservice;

import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.dto.AuthUser;
import com.hotelbooking.HotelBooking.dto.UserDTO;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.enums.CustomerStatus;
import com.hotelbooking.HotelBooking.repository.UserRepository;
import com.hotelbooking.HotelBooking.security.JWTUtils;

import jakarta.servlet.http.HttpServletResponse;

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

	public UserDTO signin(User user, HttpServletResponse response) {
		
		try {
			authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
			User userRepo = userRepository.findByUsername(user.getUsername()).orElseThrow();
			String accessToken = jwtUtils.generateAccessToken(userRepo);
			String refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), userRepo);
			ResponseCookie cookie1 = ResponseCookie.from("accessToken", accessToken).httpOnly(true)
					.secure(true).path("/").maxAge(604800).sameSite("None").build();
			ResponseCookie cookie2 = ResponseCookie.from("refreshToken", refreshToken).httpOnly(true)
					.path("/").maxAge(604888).sameSite("None").build();
			response.addHeader(HttpHeaders.SET_COOKIE, cookie1.toString());
			response.addHeader(HttpHeaders.SET_COOKIE, cookie2.toString());
			return new UserDTO(userRepo);
			
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
