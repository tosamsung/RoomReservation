package com.hotelbooking.HotelBooking.service.userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.entity.UserDetailImpl;
import com.hotelbooking.HotelBooking.repository.UserRepository;

@Service
@Qualifier("userDetailsServiceImpl")
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
	@Autowired
	UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user= userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
		return new UserDetailImpl(user);
	}

}
