package com.hotelbooking.HotelBooking.service.serviceinterface;

import com.hotelbooking.HotelBooking.entity.UserMonthCount;

import java.util.List;

public interface StatisticsService {
    int countUserByYearAndMonth(int year, int month);

    List<UserMonthCount> findTop12MonthsWithUserCount();
}
