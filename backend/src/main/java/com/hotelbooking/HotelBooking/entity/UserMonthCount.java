package com.hotelbooking.HotelBooking.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class UserMonthCount {
    private int year;
    private int month;
    private long userCount;

}
