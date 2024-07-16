package com.hotelbooking.HotelBooking.entity;


import com.hotelbooking.HotelBooking.entity.property.Property;


import jakarta.persistence.Entity;
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
@Table(name = "Room_Booking")
public class RoomBooking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "property_id", referencedColumnName = "id", nullable = false)
	private Property property;
	@ManyToOne
	@JoinColumn(name = "booking_id", referencedColumnName = "id", nullable = false)
	private Booking booking;
	
	private Integer quantity;
	
	private Double total;
}
