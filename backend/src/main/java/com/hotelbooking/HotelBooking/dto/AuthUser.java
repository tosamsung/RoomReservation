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
	
}
