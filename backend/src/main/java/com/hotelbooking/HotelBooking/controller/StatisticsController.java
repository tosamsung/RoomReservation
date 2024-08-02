package com.hotelbooking.HotelBooking.controller;

import com.hotelbooking.HotelBooking.dto.ApiResponse;
import com.hotelbooking.HotelBooking.entity.UserMonthCount;
import com.hotelbooking.HotelBooking.service.serviceinterface.StatisticsService;
import com.hotelbooking.HotelBooking.service.userservice.StatisticsServiceImpl;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<ApiResponse<Integer>> statisticsUserRegisterMonth(@RequestParam Optional<Integer> month, @RequestParam Optional<Integer> year) {
        LocalDate localDate=LocalDate.now();
        return ResponseEntity.ok(ApiResponse.<Integer>builder().data(statisticsService.countUserByYearAndMonth(year.orElse(localDate.getYear()),month.orElse(localDate.getMonthValue()))).build());
    }
    @GetMapping("/user-register/chart")
    public ResponseEntity<ApiResponse<List<UserMonthCount>>> statisticsUserRegisterMonth() {
        return ResponseEntity.ok(ApiResponse.<List<UserMonthCount>>builder().data(statisticsService.findTop12MonthsWithUserCount()).build());//statisticsService.findTop12MonthsWithUserCount());
    }

    @GetMapping("/user-register/chart/{year}")
    public ResponseEntity<ApiResponse<List<UserMonthCount>>> statisticsUserRegisterMonth(@PathVariable int year) {
        return ResponseEntity.ok(ApiResponse.<List<UserMonthCount>>builder().data(statisticsService.findUserByYear(year)).build());//statisticsService.findTop12MonthsWithUserCount());
    }
}
