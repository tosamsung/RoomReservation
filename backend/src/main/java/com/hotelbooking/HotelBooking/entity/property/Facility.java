package com.hotelbooking.HotelBooking.entity.property;

import java.util.Set;

import com.hotelbooking.HotelBooking.enums.FacilityType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "facilities")
public class Facility {
	@Id
	private String name;
	
    @Enumerated(EnumType.STRING)
	private FacilityType facilityType;

}
