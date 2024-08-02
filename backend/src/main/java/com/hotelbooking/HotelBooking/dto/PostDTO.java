package com.hotelbooking.HotelBooking.dto;

import com.hotelbooking.HotelBooking.entity.property.Property;
import com.hotelbooking.HotelBooking.enums.PostStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostDTO {
	@Min(value =  0, message = "propertyId must be greater than 0")
	private Long propertyId;
	@NotBlank(message = "about is required")
	private String about;
	@NotBlank(message = "space is required")
	private String space;
	@NotBlank(message = "access is required")
	private String access;
	@NotNull(message = "postStatus is required")
	private PostStatus postStatus;
}
