package com.hotelbooking.HotelBooking.entity;

import java.util.Date;

import com.hotelbooking.HotelBooking.enums.CustomerStatus;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Users")
@ToString
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
	private String image;
    @Column(nullable = false)
	private String password;
    @Column(nullable = false)
	private String phone;
    @Column(nullable = false)
	private Date birthDate;
	@CreatedDate
	@Temporal(TemporalType.TIMESTAMP)
	private Date createDate;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
	private CustomerStatus customerStatus=CustomerStatus.ACTIVE;
}
