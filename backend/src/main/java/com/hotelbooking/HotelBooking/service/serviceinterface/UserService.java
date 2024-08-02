package com.hotelbooking.HotelBooking.service.serviceinterface;

import com.hotelbooking.HotelBooking.dto.UserDTO;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.responses.UserResponse;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;


public interface UserService {
	User findByUserName(String username);
	Page<UserResponse> find(Pageable pageable);
	UserResponse create(UserDTO userDTO);
	UserResponse update(UserDTO userDTO,Long id);
	void delete(Long id);
	UserResponse findById(Long id);
}
