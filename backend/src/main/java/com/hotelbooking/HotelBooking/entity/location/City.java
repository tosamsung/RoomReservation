package com.hotelbooking.HotelBooking.entity.location;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Cities")
public class City {
	@Id
	private String cityName;
	private String image;

    @ManyToOne
    @JoinColumn(name = "country_name", referencedColumnName = "countryName")
    private Country country;
}
