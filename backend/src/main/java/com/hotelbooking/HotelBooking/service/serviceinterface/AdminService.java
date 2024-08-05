package com.hotelbooking.HotelBooking.service.serviceinterface;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.hotelbooking.HotelBooking.dto.AdminDTO;
import com.hotelbooking.HotelBooking.entity.employee.Admin;

public interface AdminService {
    Page<AdminDTO> getAllAdmins(Pageable pageable);

	void create(Admin admin);

	void update(Admin admin);

	void delete(Long id);

	Admin findByUsername(String username);
}
