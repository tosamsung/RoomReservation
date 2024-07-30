package com.hotelbooking.HotelBooking.controller;

import com.hotelbooking.HotelBooking.entity.UserMonthCount;
import com.hotelbooking.HotelBooking.service.serviceinterface.StatisticsService;
import com.hotelbooking.HotelBooking.service.userservice.StatisticsServiceImpl;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/statistics")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class StatisticsController {
    final StatisticsService statisticsService;
    @GetMapping("/user-register")
    public ResponseEntity<Integer> statisticsUserRegisterMonth(@RequestParam Optional<Integer> month, @RequestParam Optional<Integer> year) {
        LocalDate localDate=LocalDate.now();
        return ResponseEntity.ok( statisticsService.countUserByYearAndMonth(year.orElse(localDate.getYear()), month.orElse(localDate.getMonthValue())));
    }
    @GetMapping("/user-register/chart")
    public ResponseEntity<List<UserMonthCount>> statisticsUserRegisterMonth() {
        return ResponseEntity.ok(statisticsService.findTop12MonthsWithUserCount());
    }
}
