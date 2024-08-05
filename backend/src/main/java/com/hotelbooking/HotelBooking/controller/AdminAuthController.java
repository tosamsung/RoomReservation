package com.hotelbooking.HotelBooking.controller;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hotelbooking.HotelBooking.dto.UserLoginDTO;
import com.hotelbooking.HotelBooking.entity.employee.Admin;
import com.hotelbooking.HotelBooking.entity.employee.EmployeeRole;
import com.hotelbooking.HotelBooking.responses.AdminResponse;
import com.hotelbooking.HotelBooking.service.adminservice.AdminAuthService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/auth/admin")
public class AdminAuthController {
	@Autowired
	AdminAuthService adminAuthService;
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
}
