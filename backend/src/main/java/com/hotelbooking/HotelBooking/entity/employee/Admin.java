package com.hotelbooking.HotelBooking.entity.employee;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.hotelbooking.HotelBooking.enums.WorkingStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "Users")
@ToString
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

    @Column(nullable = false,unique = true)
	private String IdentificationNumber;
	
    @Column(nullable = false)
	private String phone;
	
    private Double salary;
    
	private Date createDate;
	
	private Date startDate;
	
	private Date endDate;
	
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
	private WorkingStatus workingStatus=WorkingStatus.Active;
    
    @ManyToMany
    @JoinTable(
        name = "admin_roles",
        joinColumns = @JoinColumn(name = "admin_id"),
        inverseJoinColumns = @JoinColumn(name = "role_name")
    )
    private Set<EmployeeRole> roles = new HashSet<>();
}


