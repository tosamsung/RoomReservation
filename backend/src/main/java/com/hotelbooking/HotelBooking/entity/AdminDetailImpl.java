package com.hotelbooking.HotelBooking.entity;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.hotelbooking.HotelBooking.entity.employee.Admin;

public class AdminDetailImpl implements UserDetails{
	private Admin admin;

	public AdminDetailImpl(Admin admin) {
		super();
		this.admin = admin;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		  Set<GrantedAuthority> authorities = admin.getRoles().stream()
		            .map(role -> new SimpleGrantedAuthority(role.getName()))
		            .collect(Collectors.toSet());
		        return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return admin.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return admin.getUsername();
	}
}
