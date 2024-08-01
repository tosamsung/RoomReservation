package com.hotelbooking.HotelBooking.dto;

import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.enums.CustomerStatus;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

import java.util.Date;

@Data

@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserUpdateDTO {
	private Long id;
	@NotBlank(message = "Firstname is required")
	private String firstname;
	@NotBlank(message = "Lastname is required")
	private String lastname;
	@NotBlank(message = "Username is required")
	private String username;
	@NotBlank(message = "Email is required")
	private String email;
	@NotBlank(message = "Password is required")
	private String image;
	@NotBlank(message = "Phone number is required")
	private String phone;
	private Date birthDate;

	private CustomerStatus customerStatus;

	private boolean haveBusinessAccount;


	
	

}
