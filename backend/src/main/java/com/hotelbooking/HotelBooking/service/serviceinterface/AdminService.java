package com.hotelbooking.HotelBooking.service.serviceinterface;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.hotelbooking.HotelBooking.dto.AdminDTO;
import com.hotelbooking.HotelBooking.entity.employee.Admin;
import com.hotelbooking.HotelBooking.responses.AdminResponse;

public interface AdminService {
    Page<AdminResponse> getAllAdmins(Pageable pageable);

	AdminResponse create(AdminDTO admin);

	AdminResponse update(AdminDTO admin);

	void delete(Long id);

	Page<AdminResponse> find(Pageable pageable);
}
