package com.hotelbooking.HotelBooking.service.adminservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.entity.AdminDetailImpl;
import com.hotelbooking.HotelBooking.entity.employee.Admin;
import com.hotelbooking.HotelBooking.repository.AdminRepository;

@Service
@Qualifier("adminDetailsServiceImpl")
public class AdminDetailsServiceImpl implements UserDetailsService{
	 @Autowired
	    private AdminRepository adminRepository;
	 
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Admin admin = adminRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Admin not found"));
		return new AdminDetailImpl(admin);
	}

}
