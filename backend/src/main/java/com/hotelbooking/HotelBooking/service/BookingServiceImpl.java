package com.hotelbooking.HotelBooking.service;

import com.hotelbooking.HotelBooking.dto.BookingDTO;
import com.hotelbooking.HotelBooking.entity.Booking;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.entity.property.Property;
import com.hotelbooking.HotelBooking.exceptions.DataNotFoundException;
import com.hotelbooking.HotelBooking.mapper.BookingMapper;
import com.hotelbooking.HotelBooking.repository.BookingRepository;
import com.hotelbooking.HotelBooking.repository.PropertyRepository;
import com.hotelbooking.HotelBooking.repository.UserRepository;
import com.hotelbooking.HotelBooking.responses.BookingResponse;
import com.hotelbooking.HotelBooking.service.serviceinterface.BookingService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BookingServiceImpl implements BookingService {
    UserRepository userRepository;
    PropertyRepository propertyRepository;
    BookingRepository repository;
    BookingMapper mapper;
    private User findUserByUserName(String username) throws DataNotFoundException {
        return userRepository.findByUsername(username).orElseThrow(()->new DataNotFoundException("Could not find user with username: "+username));
    }
    private Booking findBookingById(Long id) throws DataNotFoundException {
        return repository.findById(id).orElseThrow(()->new DataNotFoundException("Could not find booking with id: "+id));
    }
    private Property findPropertyById(Long id) throws DataNotFoundException {
        return propertyRepository.findById(id).orElseThrow(()->new DataNotFoundException("Could not find property with id: "+id));
    }
    private BookingResponse save(Booking booking) {
       return mapper.toResponse(repository.save(booking));
    }
    @Override
    public BookingResponse create(BookingDTO bookingDTO) throws DataNotFoundException {
        User user=findUserByUserName(SecurityContextHolder.getContext().getAuthentication().getName());
        Property property=findPropertyById(bookingDTO.propertyId());
        Booking booking = mapper.toEntity(bookingDTO);
        booking.setUser(user);
        booking.setProperty(property);
        return save(booking);
    }

    @Override
    public BookingResponse update(BookingDTO bookingDTO, Long id) throws DataNotFoundException {
        Booking booking=findBookingById(id);
        mapper.update(bookingDTO,booking);
        if(!bookingDTO.propertyId().equals(booking.getProperty().getId())) {
            booking.setProperty(findPropertyById(bookingDTO.propertyId()));
        }
        return save(booking);
    }

    @Override
    public BookingResponse findById(Long id) throws DataNotFoundException {
        return mapper.toResponse(findBookingById(id));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
    @Override
    public List<BookingResponse> findAll() throws DataNotFoundException {
        return repository.findAll().stream().map(t ->mapper.toResponse(t)).toList();
    }
}
