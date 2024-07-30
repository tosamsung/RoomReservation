package com.hotelbooking.HotelBooking.responses;

import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.enums.CustomerStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserResponse {

	private Long id;

	private String firstname;

	private String lastname;

	private String username;

	private String email;

	private String image;

	private String phone;

	private Date birthDate;

	private Date createDate;

	private CustomerStatus customerStatus = CustomerStatus.ACTIVE;

	private boolean haveBusinessAccount;

	public UserResponse(User user) {
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
