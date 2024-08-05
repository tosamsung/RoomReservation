package com.hotelbooking.HotelBooking.dto;

import java.util.Date;

import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.enums.CustomerStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

@Data

@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserDTO {
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
	@NotBlank(message = "Password is required")
	@Length(min = 3,message = "Password must be 3 characters")
	private String password;
	@NotBlank(message = "Phone number is required")
	private String phone;
	private Date birthDate;
	private Date createDate = new Date();

	private CustomerStatus customerStatus = CustomerStatus.ACTIVE;
	
	private boolean haveBusinessAccount;

	public UserDTO(User user) {
		super();
		this.id = user.getId();
		this.firstname = user.getFirstname();
		this.lastname = user.getLastname();
		this.username = user.getUsername();
		this.email = user.getEmail();
		this.image = user.getImage();
		this.phone = user.getPhone();
		this.birthDate = user.getBirthDate();
		this.createDate = user.getCreateDate();
		this.customerStatus = user.getCustomerStatus();
	}
	
	

}
