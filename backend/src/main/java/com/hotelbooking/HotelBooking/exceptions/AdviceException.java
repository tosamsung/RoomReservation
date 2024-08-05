package com.hotelbooking.HotelBooking.exceptions;

import com.hotelbooking.HotelBooking.dto.BookingDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AdviceException {
    @ExceptionHandler(DataNotFoundException.class)
    public ResponseEntity<String> handleDataNotFoundException(DataNotFoundException e) {
       return ResponseEntity.badRequest().body(e.getMessage());
    }
    @ExceptionHandler(ExistingException.class)
    public ResponseEntity<String> handleExistingException(ExistingException e) {
        return  ResponseEntity.badRequest().body(e.getMessage());
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        e.printStackTrace();
        return  ResponseEntity.internalServerError().body(e.getMessage());
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        return  ResponseEntity.badRequest().body(e.getFieldError().getDefaultMessage());
    }

}
