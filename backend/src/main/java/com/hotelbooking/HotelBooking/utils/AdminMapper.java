package com.hotelbooking.HotelBooking.utils;

import com.hotelbooking.HotelBooking.dto.AdminDTO;
import com.hotelbooking.HotelBooking.entity.employee.Admin;

public class AdminMapper {
	public static AdminDTO toDTO(Admin admin) {
		AdminDTO dto = new AdminDTO(admin);
		return dto;
	}

	public static Admin toEntity(AdminDTO dto) {
		Admin admin = new Admin();
		return admin;
	}
}
