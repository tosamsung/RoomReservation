//package com.hotelbooking.HotelBooking.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import com.hotelbooking.HotelBooking.dto.AuthUser;
//import com.hotelbooking.HotelBooking.entity.User;
//import com.hotelbooking.HotelBooking.security.JWTUtils;
//import com.hotelbooking.HotelBooking.service.userservice.UserAuthService;
//
//@Controller
//@RequestMapping("/auth")
//public class UserController {
//	@Autowired
//	UserAuthService userAuthService;
//	
//	@Autowired
//	private UserDetailsService detailsService;
//	
//	@Autowired
//	private JWTUtils jwtUtils;
//	
//	@PostMapping("/signup")
//	public ResponseEntity<String>signup(@RequestBody User user){
//		String message= userAuthService.signup(user);
//		return ResponseEntity.ok(message);
//	}
//	
//	@PostMapping("/signin")
//	public ResponseEntity<AuthUser> signin(@RequestBody User user){
//		AuthUser authUser = userAuthService.signin(user);
//		return ResponseEntity.ok(authUser);
//	}
//	
//	
//}
