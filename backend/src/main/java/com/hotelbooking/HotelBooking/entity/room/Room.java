package com.hotelbooking.HotelBooking.entity.room;

import java.util.Date;
import java.util.Set;

import com.hotelbooking.HotelBooking.entity.property.Property;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
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
@Table(name = "Rooms")
public class Room {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String roomName;
	@ManyToOne
	@JoinColumn(name = "property_id", referencedColumnName = "id", nullable = false)
	private Property property;
	private Integer numberOfChild;
	private Integer numberOfAdult;
	private String description;
	private Integer quantity;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "breakfast_detail_id", referencedColumnName = "id")
	private BreakfastDetail breakfastDetail;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "bed_detail_id", referencedColumnName = "id")
	private BedDetail bedDetail;
	
	private Double squareMetres;
	private Boolean petAllowed;
	private Boolean childAllowed;
	private Boolean smokingAllowed;
	private Date createDate;
	@ManyToMany
    @JoinTable(
        name = "Room_DiscountOffer",
        joinColumns = @JoinColumn(name = "room_id"),
        inverseJoinColumns = @JoinColumn(name = "discount_offer_id")
    )
    private Set<DiscountOffer> discountOffers;
	@ManyToMany
    @JoinTable(
        name = "Room_Facility",
        joinColumns = @JoinColumn(name = "room_id"),
        inverseJoinColumns = @JoinColumn(name = "facility_name")
    )
    private Set<Facility> facilities;
}
