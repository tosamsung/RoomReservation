package com.hotelbooking.HotelBooking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hotelbooking.HotelBooking.entity.business.BusinessAccount;
import com.hotelbooking.HotelBooking.service.serviceinterface.BusinessAccountService;

@Controller
@RequestMapping("/business")
public class BusinessController {
	@Autowired
	private BusinessAccountService businessAccountService;

	@PostMapping("create")
	public ResponseEntity<BusinessAccount> createBusiness(@RequestBody BusinessAccount businessAccount) {
		BusinessAccount createdAccount = businessAccountService.createBusinessAcount(businessAccount);
		return ResponseEntity.ok(createdAccount);
	}
}
