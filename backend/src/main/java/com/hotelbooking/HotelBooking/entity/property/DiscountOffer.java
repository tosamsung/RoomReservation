package com.hotelbooking.HotelBooking.entity.property;

import java.util.Date;

import com.hotelbooking.HotelBooking.enums.DiscountOfferStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
@Table(name = "DiscountOffers")
public class DiscountOffer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String description;
	private Double percentage;
	private Date expiredDate;
	private Date createDate;
	@ManyToOne
	@JoinColumn(name = "property_id", referencedColumnName = "id", nullable = false)
	private Property property;
	
    @Enumerated(EnumType.STRING)
	private DiscountOfferStatus discountOfferStatus;
    
}
