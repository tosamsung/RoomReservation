package com.hotelbooking.HotelBooking.entity;

import java.util.Date;

import com.hotelbooking.HotelBooking.enums.CustomerStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @Column(nullable = false)
	private String firstname;
    
    @Column(nullable = false)
	private String lastname;
	
	@Column(nullable = false, unique = true)
	private String username;
	
	@Column(nullable = false, unique = true)
	private String email;
	
    @Column(nullable = false)
	private String image;
    
    @Column(nullable = false)
	private String password;
	
    @Column(nullable = false)
	private String phone;
	
    @Column(nullable = false)
	private Date birthDate;
	
	private Date createDate;
	
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
	private CustomerStatus customerStatus=CustomerStatus.ACTIVE;

}
