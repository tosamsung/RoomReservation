package com.hotelbooking.HotelBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hotelbooking.HotelBooking.entity.business.BusinessAccount;

public interface BusinessAccountRepository extends  JpaRepository<BusinessAccount, Long>{
	 @Query("SELECT b FROM BusinessAccount b WHERE b.user.id = :userId")
	    BusinessAccount findByUserId(@Param("userId") Long userId);
}
