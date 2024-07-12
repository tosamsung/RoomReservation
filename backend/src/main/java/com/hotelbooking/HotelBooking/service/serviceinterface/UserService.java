package com.hotelbooking.HotelBooking.service.serviceinterface;

import com.hotelbooking.HotelBooking.entity.User;

public interface UserService {
	User findByUserName(String username);
}
