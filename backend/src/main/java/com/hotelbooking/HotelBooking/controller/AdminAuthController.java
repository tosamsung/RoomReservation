package com.hotelbooking.HotelBooking.controller;

import java.io.IOException;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hotelbooking.HotelBooking.dto.UserLoginDTO;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.entity.employee.Admin;
import com.hotelbooking.HotelBooking.entity.employee.EmployeeRole;
import com.hotelbooking.HotelBooking.responses.AdminResponse;
import com.hotelbooking.HotelBooking.responses.UserResponse;
import com.hotelbooking.HotelBooking.service.adminservice.AdminAuthService;
import com.hotelbooking.HotelBooking.service.serviceinterface.AdminService;
import com.hotelbooking.HotelBooking.utils.CookieUtils;
import com.hotelbooking.HotelBooking.utils.JWTUtils;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/auth/admin")
public class AdminAuthController {
	@Autowired
	AdminAuthService adminAuthService;

	@Autowired
	@Qualifier("adminDetailsServiceImpl")
	private UserDetailsService adminDetailsServiceImpl;
	
	@Autowired
	AdminService adminService;
	@Autowired
	private JWTUtils jwtUtils;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@PostMapping("/test")
	public ResponseEntity<AdminResponse> createTestAdmin() {
		Admin testAdmin=new Admin();
		testAdmin.setCreateDate(new Date());
		testAdmin.setUsername("Admin");
		testAdmin.setFullname("ABC");
		testAdmin.setPassword(passwordEncoder.encode("123"));
		testAdmin.setIdentificationNumber("44553224");
		testAdmin.setPhone("123");
		testAdmin.setEmail("Admin@gmail.com");
		EmployeeRole role=new EmployeeRole();
		role.setName("ADMIN");
		Set<EmployeeRole> setRole=new HashSet<EmployeeRole>();
		setRole.add(role);
		testAdmin.setRoles(setRole);
		Admin admin= adminAuthService.saveAdmin(testAdmin);
		AdminResponse reponse=new AdminResponse(admin);
		return ResponseEntity.ok(reponse);
	}
	
	@PostMapping("/signin")
	public ResponseEntity<AdminResponse> adminSignin(@RequestBody UserLoginDTO userLoginDTO, HttpServletResponse response,
			HttpServletRequest request) {
		Admin result=adminAuthService.signin(userLoginDTO, response);
		AdminResponse reponse=new AdminResponse(result);
		
		return ResponseEntity.ok(reponse);
	}
	@PostMapping("/validate")
	public ResponseEntity<AdminResponse> validate(HttpServletRequest request) {
		String accessToken = CookieUtils.getCookieValueByName(request, "accessToken");
		String userName = jwtUtils.extractUsername(accessToken);
		Admin admin=adminService.findByUsername(userName);
		AdminResponse adminResponse=new AdminResponse(admin);
		return ResponseEntity.ok(adminResponse);

	}
	@PostMapping("/refreshToken")
	public ResponseEntity<?> refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException, IllegalAccessException {
	    String refreshToken = CookieUtils.getCookieValueByName(request, "AdminRToken");
	    if (refreshToken == null || refreshToken.isBlank()) {
	        return ResponseEntity.status(HttpStatus.FORBIDDEN)
	                             .body("{\"statusCode\": 403, \"error\": \"Expired\"}");
	    }
	    try {
	        String newAccessToken = refreshAccessToken(refreshToken);
	        ResponseCookie newAccessTokenCookie = ResponseCookie.from("AdminAToken", newAccessToken)
	                                                            .httpOnly(true)
	                                                            .secure(true)
	                                                            .path("/")
	                                                            .maxAge(604800)
	                                                            .sameSite("None")
	                                                            .build();
	        response.addHeader(HttpHeaders.SET_COOKIE, newAccessTokenCookie.toString());
	        return ResponseEntity.ok().build();
	    } catch (Exception e) {
	        throw e;
	    }
	}
	public String refreshAccessToken(String refreshToken) {
		try {
			String userName = jwtUtils.extractUsername(refreshToken);
			UserDetails userDetails = adminDetailsServiceImpl.loadUserByUsername(userName);

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

}
