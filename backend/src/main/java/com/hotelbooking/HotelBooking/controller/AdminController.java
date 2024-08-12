package com.hotelbooking.HotelBooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hotelbooking.HotelBooking.dto.AdminDTO;
import com.hotelbooking.HotelBooking.entity.employee.Admin;
import com.hotelbooking.HotelBooking.responses.AdminResponse;
import com.hotelbooking.HotelBooking.responses.UserListResponse;
import com.hotelbooking.HotelBooking.service.serviceinterface.AdminService;

@RestController
@RequestMapping("/admins")
public class AdminController {
	@Autowired
	AdminService adminService;

	@GetMapping
	public ResponseEntity<Page<AdminResponse>> getAllAdmins(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size){
	    Pageable pageable = PageRequest.of(page, size);
	    Page<AdminResponse> adminPage = adminService.getAllAdmins(pageable);
	    
	    return ResponseEntity.ok(adminPage);
	}

	
	@PostMapping()
	public ResponseEntity<AdminResponse> create(@RequestBody AdminDTO admin){
		return ResponseEntity.ok(adminService.create(admin));
	}
	
	@PutMapping()
	public ResponseEntity<AdminResponse> update(@RequestBody AdminDTO admin){
		return ResponseEntity.ok(adminService.update(admin));
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id){
		adminService.delete(id);
		return ResponseEntity.ok("Delete admin successfuly");
	}

}
