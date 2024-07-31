package com.hotelbooking.HotelBooking.dto;

import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;

public class UserLoginDTO {
    @NotBlank(message = "Username is required")
    private String username;
    @Length(min = 3,message = "Password must be 3 characters")
    private String password;
}
