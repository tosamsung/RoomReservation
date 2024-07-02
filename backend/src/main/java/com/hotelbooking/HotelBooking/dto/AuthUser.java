package com.hotelbooking.HotelBooking.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthUser {
	private String accessToken;
	private String refreshToken;
	private int statusCode;
	private String message;
	public AuthUser(int statusCode, String message) {
		super();
		this.statusCode = statusCode;
		this.message = message;
	}
	public AuthUser(String accessToken, String refreshToken) {
		super();
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}
	
	
	
	
	

}
