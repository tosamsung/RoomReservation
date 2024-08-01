package com.hotelbooking.HotelBooking.entity.employee;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.hotelbooking.HotelBooking.enums.WorkingStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Admin")
@ToString
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false,unique = true)
	private String username;
	
	@Column(nullable = false)
	private String fullname; 
	
	@Column(nullable = false)
	private String password;

    @Column(nullable = false,unique = true)
	private String identificationNumber;
	
    @Column(nullable = false)
	private String phone;
    
    @Column(nullable = false,unique = true)
    private String email;
	
    private Double salary;
    
	private Date createDate;
	
	private Date startDate;
	
	private Date endDate;
	
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
	private WorkingStatus workingStatus=WorkingStatus.ACTIVE;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "admin_roles",
        joinColumns = @JoinColumn(name = "admin_id"),
        inverseJoinColumns = @JoinColumn(name = "role_name")
    )
    private Set<EmployeeRole> roles ;
}


