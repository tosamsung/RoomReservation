package com.hotelbooking.HotelBooking.service.userservice;

import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.dto.UserLoginDTO;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.enums.CustomerStatus;
import com.hotelbooking.HotelBooking.repository.UserRepository;
import com.hotelbooking.HotelBooking.utils.JWTUtils;

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
	@Qualifier("userAuthenticationManager")
	private AuthenticationManager userAuthenticationManager;

	public User signin(UserLoginDTO user, HttpServletResponse response) {

		userAuthenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
		User userRepo = userRepository.findByUsername(user.getUsername()).orElseThrow();
		String accessToken = jwtUtils.generateAccessToken(userRepo);
		String refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), userRepo);
		ResponseCookie cookie1 = ResponseCookie.from("accessToken", accessToken).httpOnly(true).secure(true).path("/")
				.maxAge(604800).sameSite("None").build();
		ResponseCookie cookie2 = ResponseCookie.from("refreshToken", refreshToken).httpOnly(true).secure(true).path("/")
				.maxAge(604888).sameSite("None").build();
		response.addHeader(HttpHeaders.SET_COOKIE, cookie1.toString());
		response.addHeader(HttpHeaders.SET_COOKIE, cookie2.toString());
		return userRepo;

	}

	public User signup(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setCreateDate(new Date());
		user.setCustomerStatus(CustomerStatus.ACTIVE);
		user.setImage("https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg");

		return userRepository.save(user);

	}

	public void logout(HttpServletResponse response) {
		ResponseCookie cookie1 = ResponseCookie.from("accessToken", null).httpOnly(true).secure(true).path("/")
				.maxAge(0).sameSite("None").build();
		ResponseCookie cookie2 = ResponseCookie.from("refreshToken", null).httpOnly(true).secure(true).path("/")
				.maxAge(0).sameSite("None").build();
		response.addHeader(HttpHeaders.SET_COOKIE, cookie1.toString());
		response.addHeader(HttpHeaders.SET_COOKIE, cookie2.toString());
	}
}
