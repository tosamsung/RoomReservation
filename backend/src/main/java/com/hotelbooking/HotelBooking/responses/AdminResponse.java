package com.hotelbooking.HotelBooking.responses;

import java.util.Date;
import java.util.Set;
import java.util.stream.Collectors;

import com.hotelbooking.HotelBooking.entity.employee.Admin;
import com.hotelbooking.HotelBooking.entity.employee.EmployeeRole;
import com.hotelbooking.HotelBooking.enums.WorkingStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminResponse {

	public AdminResponse(Admin admin) {
		super();
		this.id = admin.getId();
		this.username = admin.getUsername();
		this.fullname = admin.getFullname();
		this.identificationNumber = admin.getIdentificationNumber();
		this.phone = admin.getPhone();
		this.email = admin.getEmail();
		this.salary = admin.getSalary();
		this.createDate = admin.getCreateDate();
		this.startDate = admin.getStartDate();
		this.endDate = admin.getEndDate();
		this.workingStatus = admin.getWorkingStatus();
		this.roles = admin.getRoles().stream().map(EmployeeRole::getName).collect(Collectors.toSet());
	}

	private Long id;

	private String username;

	private String fullname;

	private String identificationNumber;

	private String phone;

	private String email;

	private Double salary;

	private Date createDate;

	private Date startDate;

	private Date endDate;

	private Set<String> roles;

	private WorkingStatus workingStatus;
}
