package com.hotelbooking.HotelBooking.controller;

import java.io.IOException;


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

import com.hotelbooking.HotelBooking.dto.UserDTO;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.service.serviceinterface.BusinessAccountService;
import com.hotelbooking.HotelBooking.service.serviceinterface.UserService;
import com.hotelbooking.HotelBooking.service.userservice.UserAuthService;
import com.hotelbooking.HotelBooking.service.userservice.UserServiceImpl;
import com.hotelbooking.HotelBooking.utils.CookieUtils;
import com.hotelbooking.HotelBooking.utils.JWTUtils;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	UserAuthService userAuthService;
	@Autowired
	UserService userService;
	@Autowired
	BusinessAccountService businessAccountService;
	
	@Autowired
	private JWTUtils jwtUtils;

	@Autowired
	private UserDetailsService detailsService;

	private static final String CONTENT_TYPE_JSON = "application/json";
	private static final String ENCODING_UTF8 = "UTF-8";

	@PostMapping("/signup")
	public ResponseEntity<String> signup(@RequestBody User user) {
		String message = userAuthService.signup(user);
		return ResponseEntity.ok(message);
	}

	@PostMapping("/logout")
	public ResponseEntity<String> logout(HttpServletResponse response) {
		System.out.println("logout");
		userAuthService.logout(response);
		return ResponseEntity.ok("logout sucess");
	}
	@PostMapping("/validate")
	public ResponseEntity<UserDTO> validate(HttpServletRequest request) {
		String accessToken = CookieUtils.getCookieValueByName(request, "accessToken");
		String userName = jwtUtils.extractUsername(accessToken);
		User user=userService.findByUserName(userName);
		UserDTO userDTO=new UserDTO(user);
		if(businessAccountService.isBusinessAccountExistForUserId(user.getId())) {
			userDTO.setHaveBusinessAccount(true);
		}
		return ResponseEntity.ok(userDTO);

	}

	@PostMapping("/signin")
	public ResponseEntity<UserDTO> signin(@RequestBody User user, HttpServletResponse response,
			HttpServletRequest request) {

		UserDTO result = userAuthService.signin(user, response);
		
		return ResponseEntity.ok(result);

	}

	@PostMapping("/refreshToken")
	public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException, IllegalAccessException {
		String refreshToken = CookieUtils.getCookieValueByName(request, "refreshToken");
		if(refreshToken==null || refreshToken.isBlank()) {
			writeErrorResponse(response, "{\"statusCode\": 403, \"error\": \"Expired\"}");
			return;
		}
		try {
			String newAccessToken = refreshAccessToken(refreshToken);
			ResponseCookie newAccessTokenCookie = ResponseCookie.from("accessToken", newAccessToken).httpOnly(true)
					.secure(true).path("/").maxAge(604800).sameSite("None").build();
			response.addHeader(HttpHeaders.SET_COOKIE, newAccessTokenCookie.toString());
			response.setStatus(HttpServletResponse.SC_OK);
		} catch (Exception e) {		
			throw e;
		}

	}

	public String refreshAccessToken(String refreshToken) {
		try {
			String userName = jwtUtils.extractUsername(refreshToken);
			UserDetails userDetails = detailsService.loadUserByUsername(userName);

			if (jwtUtils.isTokenValid(refreshToken, userDetails)) {
				String newAccessToken = jwtUtils.generateAccessToken(userDetails.getUsername());
				return newAccessToken;
			} else {
				return null;
			}
		} catch (Exception e) {
			throw e;
		}

	}

	private void writeErrorResponse(HttpServletResponse response, String errorMessage) throws IOException {
		response.setContentType(CONTENT_TYPE_JSON);
		response.setCharacterEncoding(ENCODING_UTF8);
		response.getWriter().write(errorMessage);
	}
}
