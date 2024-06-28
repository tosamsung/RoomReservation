package com.hotelbooking.HotelBooking.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.hotelbooking.HotelBooking.service.serviceinterface.BusinessAccountService;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailImpl implements UserDetails{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private User user;
	
	@Autowired
	BusinessAccountService businessAccountService;

	public UserDetailImpl(User user) {
		super();
		this.user = user;
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("USER"));
		if(businessAccountService.isBusinessAccountExistForUserId(user.getId())) {
            authorities.add(new SimpleGrantedAuthority("BUSINESS"));
		}
		return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getUsername();
	}


}
