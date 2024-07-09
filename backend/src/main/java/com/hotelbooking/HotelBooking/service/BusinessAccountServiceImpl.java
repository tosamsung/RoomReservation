package com.hotelbooking.HotelBooking.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.entity.business.BusinessAccount;
import com.hotelbooking.HotelBooking.repository.BusinessAccountRepository;
import com.hotelbooking.HotelBooking.repository.UserRepository;
import com.hotelbooking.HotelBooking.service.serviceinterface.BusinessAccountService;

@Service
public class BusinessAccountServiceImpl implements BusinessAccountService {
	@Autowired
	BusinessAccountRepository businessAccountRepository;

	@Autowired
	UserRepository userRepository;

	@Override
	public Boolean isBusinessAccountExistForUserId(Long id) {
		// TODO Auto-generated method stub
		return businessAccountRepository.existsByUserId(id);
	}

	@Override
	public BusinessAccount createBusinessAcount(BusinessAccount businessAccount) {
		Long userId = businessAccount.getUser().getId();
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

		businessAccount.setUser(user);

		if (isBusinessAccountExistForUserId(userId)) {
			throw new IllegalArgumentException("Business account already exists for user id: " + userId);
		}
		return businessAccountRepository.save(businessAccount);
	}

}
