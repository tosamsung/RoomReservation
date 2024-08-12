package com.hotelbooking.HotelBooking.service.userservice;

import java.util.HashSet;

import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.dto.AdminDTO;
import com.hotelbooking.HotelBooking.entity.employee.Admin;
import com.hotelbooking.HotelBooking.entity.employee.EmployeeRole;
import com.hotelbooking.HotelBooking.repository.AdminRepository;
import com.hotelbooking.HotelBooking.repository.EmployeeRoleRepository;
import com.hotelbooking.HotelBooking.responses.AdminResponse;
import com.hotelbooking.HotelBooking.service.serviceinterface.AdminService;
import com.hotelbooking.HotelBooking.utils.AdminMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

	private final AdminRepository adminRepository;

	private final EmployeeRoleRepository employeeRoleRepository;

	private final ModelMapper modelMapper;

	@Override
	public Page<AdminResponse> getAllAdmins(Pageable pageable) {
		Page<Admin> admins = adminRepository.findAll(pageable);
		List<AdminResponse> adminDTOs = admins.stream().map(AdminMapper::toResponse).collect(Collectors.toList());
		return new PageImpl<>(adminDTOs, pageable, admins.getTotalElements());

	}

	@Override
	public AdminResponse create(AdminDTO adminDTO) {
		Admin admin = modelMapper.map(adminDTO, Admin.class);
		System.out.println(admin.toString());
		if (adminDTO.getRoles() == null || adminDTO.getRoles().isEmpty()) {
			Set<EmployeeRole> listRoles = new HashSet<EmployeeRole>();
			listRoles.add(new EmployeeRole("Staff"));
			admin.setRoles(listRoles);
		} else {
			Set<EmployeeRole> roles = adminDTO.getRoles().stream()
					.map(roleName -> employeeRoleRepository.findById(roleName).orElse(null)).filter(Objects::nonNull)
					.collect(Collectors.toSet());
			admin.setRoles(roles);
		}

		Admin savedAdmin = adminRepository.save(admin);
		return modelMapper.map(savedAdmin, AdminResponse.class);
	}

	@Override
	public AdminResponse update(AdminDTO adminDTO) {
		Admin admin = modelMapper.map(adminDTO, Admin.class);

		// You might want to check if the Admin exists before updating
		Admin existingAdmin = adminRepository.findById(admin.getId())
				.orElseThrow(() -> new RuntimeException("Admin not found"));

		if (adminDTO.getRoles() == null || adminDTO.getRoles().isEmpty()) {
			Set<EmployeeRole> listRoles = new HashSet<EmployeeRole>();
			listRoles.add(new EmployeeRole("Staff"));
			admin.setRoles(listRoles);
		} else {
			Set<EmployeeRole> roles = adminDTO.getRoles().stream()
					.map(roleName -> employeeRoleRepository.findById(roleName).orElse(null)).filter(Objects::nonNull)
					.collect(Collectors.toSet());
			admin.setRoles(roles);
		}

		Admin updatedAdmin = adminRepository.save(admin);
		return modelMapper.map(updatedAdmin, AdminResponse.class);
	}

	@Override
	public void delete(Long id) {
		adminRepository.deleteById(id);
	}

	@Override
	public Page<AdminResponse> find(Pageable pageable) {
		return adminRepository.findAll(pageable).map(a -> modelMapper.map(a, AdminResponse.class));
	}

}
