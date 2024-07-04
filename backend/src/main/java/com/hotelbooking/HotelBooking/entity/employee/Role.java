package com.hotelbooking.HotelBooking.entity.employee;


import java.util.Date;

import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.entity.property.Representative;
import com.hotelbooking.HotelBooking.enums.BusinessStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "Roles")
public class Role {
	@Id
	private String name;

}
