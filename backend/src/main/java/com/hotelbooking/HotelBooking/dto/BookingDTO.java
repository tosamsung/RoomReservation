package com.hotelbooking.HotelBooking.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hotelbooking.HotelBooking.enums.BookingStatus;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

import java.util.Date;
@JsonIgnoreProperties(ignoreUnknown = true)
public record BookingDTO(@NotNull Long propertyId, @NotNull Date checkin, @NotNull Date checkout, @NotNull @Min(1) Integer numberOfGuest, int numberOfInfant, @NotNull BookingStatus bookingStatus) {
}