package com.hotelbooking.HotelBooking.service.serviceinterface;

import com.hotelbooking.HotelBooking.dto.BookingDTO;
import com.hotelbooking.HotelBooking.responses.BookingResponse;

public interface BookingService extends  CrudService<Long, BookingDTO, BookingResponse> {
}
