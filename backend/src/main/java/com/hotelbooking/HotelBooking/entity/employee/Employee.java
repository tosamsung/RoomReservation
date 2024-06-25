package com.hotelbooking.HotelBooking.entity.employee;

import java.util.Date;
import java.util.List;

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
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Employees")
public class Employee {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String hashPassword;

    private String address;

    private String image;

    private String phoneNumber;

    @Column(nullable = false, unique = true)
    private String identificationNumber;

    @Column(nullable = false)
    private Boolean gender;

    @Column(nullable = false)
    private Date birthDate;

    @Column(nullable = false)
    private Date createDate;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private WorkingStatus workingStatus = WorkingStatus.Pending;

    private Date startDate;

    private Date endDate;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "employee_role",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "role_name") 
    )
    private List<Role> listRole;
}
