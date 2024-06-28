package com.hotelbooking.HotelBooking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.repository.BusinessAccountRepository;
import com.hotelbooking.HotelBooking.service.serviceinterface.BusinessAccountService;
@Service
public class BusinessAccountServiceImpl implements BusinessAccountService{
	@Autowired
	BusinessAccountRepository businessAccountRepository;

	@Override
	public Boolean isBusinessAccountExistForUserId(Long id) {
		// TODO Auto-generated method stub
		return businessAccountRepository.existsByUserId(id);
	}
	
	
}
