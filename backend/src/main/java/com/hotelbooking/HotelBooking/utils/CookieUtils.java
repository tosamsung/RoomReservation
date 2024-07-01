package com.hotelbooking.HotelBooking.utils;

import org.springframework.stereotype.Component;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@Component
public class CookieUtils {
	public static String getCookieValueByName(HttpServletRequest request, String name) {
		if(request.getCookies() !=  null) {
			for (Cookie cookie : request.getCookies()) {
				if(cookie.getName().equals(name)) {
					return cookie.getValue();
				}
			}
		}
		return null;
	}
}
