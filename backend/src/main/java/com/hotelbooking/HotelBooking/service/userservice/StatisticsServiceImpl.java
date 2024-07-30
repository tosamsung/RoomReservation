package com.hotelbooking.HotelBooking.service.userservice;

import com.hotelbooking.HotelBooking.entity.UserMonthCount;
import com.hotelbooking.HotelBooking.repository.UserRepository;
import com.hotelbooking.HotelBooking.service.serviceinterface.StatisticsService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class StatisticsServiceImpl implements StatisticsService {
    final UserRepository userRepository;
    @Override
    public int countUserByYearAndMonth(int year, int month) {
        return userRepository.countUserByYearAndMonth(year, month);
    }

    @Override
    public List<UserMonthCount> findTop12MonthsWithUserCount() {
        return userRepository.findTop12MonthsWithUserCount().stream().limit(12).toList();
    }
}
