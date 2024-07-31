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
import com.hotelbooking.HotelBooking.service.serviceinterface.AdminService;

@RestController
@RequestMapping("/admins")
public class AdminController {
	@Autowired
	AdminService adminService;

	@GetMapping
	public Page<AdminDTO> getAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
		Pageable pageable = PageRequest.of(page, size);
		return adminService.getAllAdmins(pageable);
	}
	
	@PostMapping()
	public ResponseEntity<String> create(@RequestBody Admin admin){
		adminService.create(admin);
		return ResponseEntity.ok("Insert admin successfuly");
	}
	
	@PutMapping()
	public ResponseEntity<String> update(@RequestBody Admin admin){
		adminService.update(admin);
		return ResponseEntity.ok("Update admin successfuly");
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id){
		adminService.delete(id);
		return ResponseEntity.ok("Delete admin successfuly");
	}

}
