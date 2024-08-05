package com.hotelbooking.HotelBooking.controller;

import com.hotelbooking.HotelBooking.dto.BookingDTO;
import com.hotelbooking.HotelBooking.enums.BookingStatus;
import com.hotelbooking.HotelBooking.exceptions.DataNotFoundException;
import com.hotelbooking.HotelBooking.responses.BookingResponse;
import com.hotelbooking.HotelBooking.service.serviceinterface.BookingService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequiredArgsConstructor
@RequestMapping("/booking")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BookingController {
    BookingService bookingService;
    @GetMapping("booking-status")
    public ResponseEntity<BookingStatus[]> getBookingStatus() {
        return ResponseEntity.status(HttpStatus.OK).body(BookingStatus.values());
    }
    @PostMapping
    public ResponseEntity<BookingResponse> createBooking(@RequestBody BookingDTO bookingDTO) throws DataNotFoundException {
        return ResponseEntity.ok(bookingService.create(bookingDTO));
    }
    @GetMapping("{id}")
    public ResponseEntity<BookingResponse> getBookingById(@PathVariable Long id) throws DataNotFoundException {
        return ResponseEntity.ok(bookingService.findById(id));
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) throws DataNotFoundException {
        bookingService.delete(id);
        return ResponseEntity.ok("Delete booking successfuly");
    }
    @GetMapping
    public ResponseEntity<List<BookingResponse>> getMethodName() throws DataNotFoundException {
        return ResponseEntity.ok(bookingService.findAll());
    }
    
    @PutMapping("{id}")
    public ResponseEntity<BookingResponse> updateBooking(@RequestBody BookingDTO bookingDTO, @PathVariable("id") Long id) throws DataNotFoundException {
        return ResponseEntity.ok(bookingService.update(bookingDTO, id));
    }
}
