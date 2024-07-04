package com.hotelbooking.HotelBooking.service.userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.dto.UserDTO;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.repository.UserRepository;

@Service
public class UserServiceImpl {
	@Autowired
	UserRepository userRepository;

	public UserDTO findByUserName(String userName) {
		User user = userRepository.findByUsername(userName)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + userName));
		return new UserDTO(user);
	}
}
