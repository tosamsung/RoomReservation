package com.hotelbooking.HotelBooking.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hotelbooking.HotelBooking.dto.UserLoginDTO;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.responses.UserResponse;
import com.hotelbooking.HotelBooking.service.adminservice.AdminAuthService;
import com.hotelbooking.HotelBooking.service.serviceinterface.BusinessAccountService;
import com.hotelbooking.HotelBooking.service.serviceinterface.UserService;
import com.hotelbooking.HotelBooking.service.userservice.UserAuthService;
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
	AdminAuthService adminAuthService;
	
	@Autowired
	UserService userService;
	@Autowired
	BusinessAccountService businessAccountService;
	
	@Autowired
	private JWTUtils jwtUtils;

	@Autowired
    @Qualifier("userDetailsServiceImpl")
	private UserDetailsService userDetailsService;


	@PostMapping("/signup")
	public ResponseEntity<UserResponse> signup(@RequestBody User user) {
		User result= userAuthService.signup(user);
		return ResponseEntity.ok(new UserResponse(result));
	}

	@PostMapping("/logout")
	public ResponseEntity<String> logout(HttpServletResponse response) {
		userAuthService.logout(response);
		return ResponseEntity.ok("logout sucess");
	}
	@PostMapping("/validate")
	public ResponseEntity<UserResponse> validate(HttpServletRequest request) {
		String accessToken = CookieUtils.getCookieValueByName(request, "accessToken");
		String userName = jwtUtils.extractUsername(accessToken);
		User user=userService.findByUserName(userName);
		UserResponse userDTO=new UserResponse(user);
		if(businessAccountService.isBusinessAccountExistForUserId(user.getId())) {
			userDTO.setHaveBusinessAccount(true);
		}
		return ResponseEntity.ok(userDTO);

	}

	@PostMapping("/signin")
	public ResponseEntity<UserResponse> signin(@RequestBody UserLoginDTO userLoginDTO, HttpServletResponse response,
			HttpServletRequest request) {
		User result = userAuthService.signin(userLoginDTO, response);
		UserResponse userDTO=new UserResponse(result);
		if(businessAccountService.isBusinessAccountExistForUserId(userDTO.getId())) {
			userDTO.setHaveBusinessAccount(true);
		}
		return ResponseEntity.ok(userDTO);
	}


	@PostMapping("/refreshToken")
    public ResponseEntity<?> refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException, IllegalAccessException {
        String refreshToken = CookieUtils.getCookieValueByName(request, "refreshToken");
        if (refreshToken == null || refreshToken.isBlank()) {
            return buildErrorResponse(HttpStatus.FORBIDDEN, "Token Not Found or Empty");

        }
        try {
            String newAccessToken = refreshAccessToken(refreshToken);
            if (newAccessToken == null) {
                return buildErrorResponse(HttpStatus.FORBIDDEN, "Invalid or Expired Token");
            }
            ResponseCookie newAccessTokenCookie = ResponseCookie.from("accessToken", newAccessToken)
                                                                .httpOnly(true)
                                                                .secure(true)
                                                                .path("/")
                                                                .maxAge(604800)
                                                                .sameSite("None")
                                                                .build();
            response.addHeader(HttpHeaders.SET_COOKIE, newAccessTokenCookie.toString());
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
        }
    }
	private String refreshAccessToken(String refreshToken) {
	    try {
	        String userName = jwtUtils.extractUsername(refreshToken);
	        UserDetails userDetails = userDetailsService.loadUserByUsername(userName);

	        if (jwtUtils.isTokenValid(refreshToken, userDetails)) {
	            return jwtUtils.generateAccessToken(userDetails.getUsername());
	        }
	    } catch (Exception e) {
	        throw e;
	    }
	    return null;
	}
	private ResponseEntity<String> buildErrorResponse(HttpStatus status, String errorMessage) {
	    return ResponseEntity.status(status)
	                         .body(String.format("{\"statusCode\": %d, \"error\": \"%s\"}", status.value(), errorMessage));
	}
}
