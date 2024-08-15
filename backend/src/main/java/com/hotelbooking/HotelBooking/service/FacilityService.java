package com.hotelbooking.HotelBooking.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.entity.property.Facility;
import com.hotelbooking.HotelBooking.enums.FacilityType;
import com.hotelbooking.HotelBooking.repository.FacilityRepository;

@Service
public class FacilityService {
	@Autowired
	private FacilityRepository facilityRepository;

	public List<Facility> addAllFacilitiesForProperty(String propertyName) {
		List<Facility> facilities = new ArrayList<>();
		for (FacilityType type : FacilityType.values()) {
			Facility facility = new Facility(propertyName, type);
			facilities.add(facility);
		}
		return facilityRepository.saveAll(facilities);
	}

	public List<Facility> addFacilities(List<Facility> facilities) {
		return facilityRepository.saveAll(facilities);
	}

	public List<Facility> getAllFacilities() {
		return facilityRepository.findAll();
	}
}
