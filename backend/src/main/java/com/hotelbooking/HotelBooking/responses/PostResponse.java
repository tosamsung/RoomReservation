package com.hotelbooking.HotelBooking.responses;

import com.hotelbooking.HotelBooking.entity.property.Property;
import com.hotelbooking.HotelBooking.enums.PostStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse {
	private Long id;
	private Long propertyId;
	private String About;
	private String Space;
	private String Access;
	private PostStatus postStatus;
	private Date createDate;
}
