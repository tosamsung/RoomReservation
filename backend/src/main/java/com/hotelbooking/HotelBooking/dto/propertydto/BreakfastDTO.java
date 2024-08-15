package com.hotelbooking.HotelBooking.dto.propertydto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BreakfastDTO {
	@NotNull(message = "Breakfast price is required")
	@Min(value = 0, message = "Breakfast price must be greater than or equal to 0")
	private Double price;

	private String type;
}
