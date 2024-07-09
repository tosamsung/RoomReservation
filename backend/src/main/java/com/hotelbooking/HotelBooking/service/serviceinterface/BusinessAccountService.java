package com.hotelbooking.HotelBooking.service.serviceinterface;

import com.hotelbooking.HotelBooking.entity.business.BusinessAccount;

public interface BusinessAccountService {
	Boolean isBusinessAccountExistForUserId(Long id);
	BusinessAccount createBusinessAcount(BusinessAccount businessAccount);
}
