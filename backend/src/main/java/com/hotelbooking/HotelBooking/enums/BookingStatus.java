package com.hotelbooking.HotelBooking.enums;

public enum BookingStatus {
	  PENDING,       // Booking has been created but not yet confirmed
	    CONFIRMED,     // Booking has been confirmed
	    CANCELLED,     // Booking has been cancelled by the user
	    CHECKED_IN,    // Guest has checked into the property
	    CHECKED_OUT,   // Guest has checked out of the property
	    NO_SHOW        // Guest did not show up for the booking
}
