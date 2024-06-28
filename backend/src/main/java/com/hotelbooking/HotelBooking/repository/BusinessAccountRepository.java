package com.hotelbooking.HotelBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelbooking.HotelBooking.entity.business.BusinessAccount;

public interface BusinessAccountRepository extends  JpaRepository<BusinessAccount, Long>{
	 boolean existsByUserId(Long userId);
}
