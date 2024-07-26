package com.hotelbooking.HotelBooking.entity.property;

import java.util.Date;
import java.util.Set;

import com.hotelbooking.HotelBooking.entity.BusinessAccount;
import com.hotelbooking.HotelBooking.enums.PropertyStatus;
import com.hotelbooking.HotelBooking.enums.PropertyType;
import com.hotelbooking.HotelBooking.enums.ReservationType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Properties")
public class Property {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String image;

	@Enumerated(EnumType.STRING)
	private PropertyType propertyType;

	@Enumerated(EnumType.STRING)
	private ReservationType reservationType;

	@Enumerated(EnumType.STRING)
	private PropertyStatus propertyStatus;
	private Date createDate;
	private String address;
	private String city;
	private String country;
	private Double latitude;
	private Double longitude;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "parking_detail_id", referencedColumnName = "id")
	private ParkingDetail parkingDetail;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "breakfast_detail_id", referencedColumnName = "id")
	private BreakfastDetail breakfastDetail;
	@ManyToOne
	@JoinColumn(name = "business_account_id", referencedColumnName = "id", nullable = false)
	private BusinessAccount businessAccount;
	@ManyToMany
    @JoinTable(
        name = "Property_Facility",
        joinColumns = @JoinColumn(name = "property_id"),
        inverseJoinColumns = @JoinColumn(name = "facility_name")
    )
    private Set<Facility> facilities;
}
