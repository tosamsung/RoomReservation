package com.hotelbooking.HotelBooking.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.entity.property.Property;
import com.hotelbooking.HotelBooking.enums.BookingStatus;
import jakarta.persistence.*;

import java.util.Date;

public record BookingDTO(Long propertyId, Date checkin, Date checkout, Integer numberOfGuest, Integer numberOfInfant, BookingStatus bookingStatus) {
}