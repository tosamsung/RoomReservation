package com.hotelbooking.HotelBooking.repository;


import java.util.List;
import java.util.Optional;

import com.hotelbooking.HotelBooking.entity.UserMonthCount;

import java.awt.print.Pageable;
import java.util.Optional;
import org.springframework.data.domain.Page;
import com.hotelbooking.HotelBooking.responses.UserResponse;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelbooking.HotelBooking.entity.User;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByUsername(String username);
	@Query("SELECT count(u) FROM User u WHERE year(u.createDate) =:year and month(u.createDate) =:month")
	int countUserByYearAndMonth(int year, int month);

	@Query("SELECT new com.hotelbooking.HotelBooking.entity.UserMonthCount(YEAR(u.createDate), MONTH(u.createDate), COUNT(u.id))" +
			"FROM User u " +
			"GROUP BY YEAR(u.createDate), MONTH(u.createDate) " +
			"ORDER BY YEAR(u.createDate) DESC, MONTH(u.createDate) DESC")
	List<UserMonthCount> findTop12MonthsWithUserCount();
	@Query("SELECT new com.hotelbooking.HotelBooking.entity.UserMonthCount(YEAR(u.createDate), MONTH(u.createDate), COUNT(u.id))" +
			"FROM User u WHERE YEAR(u.createDate) =:year " +
			"GROUP BY YEAR(u.createDate), MONTH(u.createDate) " +
			"ORDER BY YEAR(u.createDate) DESC, MONTH(u.createDate) DESC")
	List<UserMonthCount> groupUserByYear(int year);

	boolean existsByUsername(String username);
	boolean existsByEmail(String username);
}
