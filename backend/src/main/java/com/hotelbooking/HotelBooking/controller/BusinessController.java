package com.hotelbooking.HotelBooking.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.entity.business.BusinessAccount;
import com.hotelbooking.HotelBooking.service.serviceinterface.BusinessAccountService;
import com.hotelbooking.HotelBooking.service.serviceinterface.UserService;
import com.hotelbooking.HotelBooking.utils.CookieUtils;
import com.hotelbooking.HotelBooking.utils.JWTUtils;

import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/business")
public class BusinessController {
	@Autowired
	private BusinessAccountService businessAccountService;
	@Autowired
	private JWTUtils jwtUtils;
	@Autowired
	UserService userService;
	@PostMapping("create")
	public ResponseEntity<BusinessAccount> createBusiness(HttpServletRequest request,@RequestBody BusinessAccount businessAccount) {
		String accessToken = CookieUtils.getCookieValueByName(request, "accessToken");
		String userName = jwtUtils.extractUsername(accessToken);
		User user=userService.findByUserName(userName);
		businessAccount.setUser(user);
		businessAccount.setCreateDate(new Date());
		BusinessAccount createdAccount = businessAccountService.createBusinessAcount(businessAccount);
		return ResponseEntity.ok(createdAccount);
	}
	@PostMapping("security")
	public ResponseEntity<String> businessSecurity() {
		
		return ResponseEntity.ok("security success");
	}
}
