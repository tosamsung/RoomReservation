package com.hotelbooking.HotelBooking.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewDTO {
	@NotNull(message = "Post ID cannot be null")
	@Min(value = 1, message = "PostId rate must be at least 1")
	private Long postId;

	@NotNull(message = "User ID cannot be null")
	@Min(value = 1, message = "UserId rate must be at least 1")
	private Long userId;

	@NotNull(message = "Comfort rate cannot be null")
	@Min(value = 1, message = "Comfort rate must be at least 1")
	@Max(value = 5, message = "Comfort rate must be at most 5")
	private Integer comfortRate;

	@NotNull(message = "Staff rate cannot be null")
	@Min(value = 1, message = "Staff rate must be at least 1")
	@Max(value = 5, message = "Staff rate must be at most 5")
	private Integer staffRate;

	@NotNull(message = "Facilities rate cannot be null")
	@Min(value = 1, message = "Facilities rate must be at least 1")
	@Max(value = 5, message = "Facilities rate must be at most 5")
	private Integer facilitiesRate;

	@NotNull(message = "Cleanliness rate cannot be null")
	@Min(value = 1, message = "Cleanliness rate must be at least 1")
	@Max(value = 5, message = "Cleanliness rate must be at most 5")
	private Integer cleanlinessRate;

	@Size(max = 500, message = "Comment must be at most 500 characters long")
	private String comment;
}
