package com.hotelbooking.HotelBooking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hotelbooking.HotelBooking.dto.AuthUser;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.security.JWTUtils;
import com.hotelbooking.HotelBooking.service.userservice.UserAuthService;
import com.hotelbooking.HotelBooking.utils.CookieUtils;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	UserAuthService userAuthService;

	@Autowired
	private JWTUtils jwtUtils;

	@Autowired
	private UserDetailsService detailsService;

	@PostMapping("/signup")
	public ResponseEntity<String> signup(@RequestBody User user) {
		String message = userAuthService.signup(user);
		return ResponseEntity.ok(message);
	}

	@PostMapping("/signin")
	public ResponseEntity<AuthUser> signin(@RequestBody User user, HttpServletResponse response,
			HttpServletRequest request) {
		System.out.println("signin"); 
		System.out.println(user.toString());
		AuthUser result = userAuthService.signin(user);
		ResponseCookie cookie1 = ResponseCookie.from("accessToken", result.getAccessToken()).httpOnly(true).secure(true)
				.path("/").maxAge(604800).sameSite("None").build();
		ResponseCookie cookie2 = ResponseCookie.from("refreshToken", result.getRefreshToken()).httpOnly(true).path("/")
				.maxAge(604888).sameSite("None").build();
		response.addHeader(HttpHeaders.SET_COOKIE, cookie1.toString());
		response.addHeader(HttpHeaders.SET_COOKIE, cookie2.toString());
		return ResponseEntity.ok(result);
	}

	@PostMapping("/refreshToken")
	public AuthUser refreshToken(HttpServletRequest request, HttpServletResponse response) {
		String refreshToken = CookieUtils.getCookieValueByName(request, "refreshToken");
		if (refreshToken != null && !refreshToken.isBlank()) {
			try {
				String newAccessToken = refreshAccessToken(refreshToken);
				ResponseCookie newAccessTokenCookie = ResponseCookie.from("accessToken", newAccessToken).httpOnly(true)
						.secure(false).path("/").maxAge(900).build();
				response.addHeader(HttpHeaders.SET_COOKIE, newAccessTokenCookie.toString());
				response.setStatus(HttpServletResponse.SC_OK);
				return new AuthUser(200, "Refresh successs");
			} catch (Exception e) {
				// TODO: handle exception
				System.out.println("refresh token hết hạn");
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				return new AuthUser(401, "Refresh token expired");
			}
		}else {
			System.out.println("refresh token trống");
			response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			return new AuthUser(401, "Refresh token is empty");
		}
	}

	public String refreshAccessToken(String refreshToken) {
		if (refreshToken == null || refreshToken.isBlank()) {
			return null;
		}
		try {
			String userName = jwtUtils.extractUsername(refreshToken);
			UserDetails userDetails = detailsService.loadUserByUsername(userName);
			if (jwtUtils.isTokenValid(refreshToken, userDetails)) {
				String newAccessToken = jwtUtils.generateAccessToken(userDetails.getUsername());
				return newAccessToken;
			} else {
				return null;
			}
		} catch (ExpiredJwtException e) {
			throw e;
		}
	}

}
