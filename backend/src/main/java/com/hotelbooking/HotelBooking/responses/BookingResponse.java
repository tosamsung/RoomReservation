package com.hotelbooking.HotelBooking.responses;

import com.hotelbooking.HotelBooking.enums.BookingStatus;
import java.util.Date;

public record BookingResponse(Long id, Long propertyId, String username, Date checkin, Date checkout, Integer numberOfGuest, int numberOfInfant, BookingStatus bookingStatus, Double total, Date createDate) {}