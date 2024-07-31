package com.hotelbooking.HotelBooking.service.userservice;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.dto.AdminDTO;
import com.hotelbooking.HotelBooking.entity.employee.Admin;
import com.hotelbooking.HotelBooking.entity.employee.EmployeeRole;
import com.hotelbooking.HotelBooking.repository.AdminRepository;
import com.hotelbooking.HotelBooking.repository.EmployeeRoleRepository;
import com.hotelbooking.HotelBooking.service.serviceinterface.AdminService;
import com.hotelbooking.HotelBooking.utils.AdminMapper;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminRepository adminRepository;

	@Autowired
	EmployeeRoleRepository employeeRoleRepository;

	@Override
    public Page<AdminDTO> getAllAdmins(Pageable pageable) {
        Page<Admin> admins = adminRepository.findAll(pageable);
        List<AdminDTO> adminDTOs = admins.stream()
                                         .map(AdminMapper::toDTO)
                                         .collect(Collectors.toList());
        return new PageImpl<>(adminDTOs, pageable, admins.getTotalElements());
    }

	@Override
	public void create(Admin admin) {
		if (admin.getRoles() == null || admin.getRoles().isEmpty()) {
			EmployeeRole defaultRole = employeeRoleRepository.findById("Staff").orElse(null);
			if (defaultRole != null) {
				Set<EmployeeRole> roles = new HashSet<EmployeeRole>();
				roles.add(defaultRole);
				admin.setRoles(roles);
			}
		}
		adminRepository.save(admin);
	}

	@Override
	public void update(Admin admin) {
		adminRepository.save(admin);
	}

	@Override
	public void delete(Long id) {
		adminRepository.deleteById(id);
	}

}
