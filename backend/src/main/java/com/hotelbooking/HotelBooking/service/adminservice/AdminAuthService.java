package com.hotelbooking.HotelBooking.service.adminservice;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.dto.UserLoginDTO;
import com.hotelbooking.HotelBooking.entity.employee.Admin;
import com.hotelbooking.HotelBooking.repository.AdminRepository;
import com.hotelbooking.HotelBooking.utils.JWTUtils;

import jakarta.servlet.http.HttpServletResponse;

@Service
public class AdminAuthService {
	@Autowired
	AdminRepository adminRepository;

	@Autowired
	private JWTUtils jwtUtils;
	@Autowired
	@Qualifier("adminAuthenticationManager")
	private AuthenticationManager adminAuthenticationManager;

	public Admin signin(UserLoginDTO user, HttpServletResponse response) {

		try {
			adminAuthenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

			Admin userRepo = adminRepository.findByUsername(user.getUsername()).orElseThrow();
			String accessToken = jwtUtils.generateAccessToken(userRepo.getUsername());
			String refreshToken = jwtUtils.generateAdminRefreshToken(new HashMap<>(), userRepo);
			ResponseCookie cookie1 = ResponseCookie.from("AdminAToken", accessToken).httpOnly(true).secure(true)
					.path("/").maxAge(604800).sameSite("None").build();
			ResponseCookie cookie2 = ResponseCookie.from("AdminRToken", refreshToken).httpOnly(true).secure(true)
					.path("/").maxAge(604888).sameSite("None").build();
			response.addHeader(HttpHeaders.SET_COOKIE, cookie1.toString());
			response.addHeader(HttpHeaders.SET_COOKIE, cookie2.toString());
			return userRepo;

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}

	public Admin saveAdmin(Admin admin) {
		return adminRepository.save(admin);
	}

	public void logout(HttpServletResponse response) {
		ResponseCookie cookie1 = ResponseCookie.from("AdminAToken", null).httpOnly(true).secure(true).path("/")
				.maxAge(0).sameSite("None").build();
		ResponseCookie cookie2 = ResponseCookie.from("AdminRToken", null).httpOnly(true).secure(true).path("/")
				.maxAge(0).sameSite("None").build();
		response.addHeader(HttpHeaders.SET_COOKIE, cookie1.toString());
		response.addHeader(HttpHeaders.SET_COOKIE, cookie2.toString());
	}
}
