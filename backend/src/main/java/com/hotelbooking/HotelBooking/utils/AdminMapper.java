package com.hotelbooking.HotelBooking.utils;

import com.hotelbooking.HotelBooking.dto.AdminDTO;
import com.hotelbooking.HotelBooking.entity.employee.Admin;
import com.hotelbooking.HotelBooking.responses.AdminResponse;

public class AdminMapper {
	public static AdminDTO toDTO(Admin admin) {
		AdminDTO dto = new AdminDTO(admin);
		return dto;
	}
	
	public static AdminResponse toResponse(Admin admin) {
		AdminResponse adminResponse = new AdminResponse(admin);
		return adminResponse;
	}

	public static Admin toEntity(AdminDTO dto) {
		Admin admin = new Admin();
		return admin;
	}
}
