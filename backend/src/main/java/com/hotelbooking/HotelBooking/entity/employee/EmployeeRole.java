package com.hotelbooking.HotelBooking.entity.employee;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Table(name = "role")
public class EmployeeRole {
	@Id
	private String name;

	public EmployeeRole(String name) {
		super();
		this.name = name;
	}
	
	

}
