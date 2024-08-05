package com.hotelbooking.HotelBooking.mapper;

import com.hotelbooking.HotelBooking.dto.BookingDTO;
import com.hotelbooking.HotelBooking.entity.Booking;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.entity.property.Property;
import com.hotelbooking.HotelBooking.responses.BookingResponse;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public interface BookingMapper {
    Booking toEntity(BookingDTO bookingDTO);

   @Mapping(source = "user", target = "username")
   @Mapping(source = "property", target = "property id")
    BookingResponse toResponse(Booking booking);
    void update(BookingDTO bookingDTO, @MappingTarget Booking booking);
    default String convertUser(User user){
        return user.getUsername();
    }
    default Long convertProperty(Property property){
        return property.getId();
    }
}
