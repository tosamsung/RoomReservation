package com.hotelbooking.HotelBooking.entity.business;

import java.util.Date;

import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.enums.BusinessStatus;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "BusinessAccounts")
public class BusinessAccount {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id", referencedColumnName = "id",unique = true)
	private User user;

	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false ,unique = true)
	private String email;
	
	@Column(nullable = false, unique = true)
	private String taxIdentificationNumber;
	
	@Column(nullable = false)
	private String address;
	
	@Column(nullable = false)
	private Date createDate;
	
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private BusinessStatus businessStatus = BusinessStatus.PENDING;
	
}
