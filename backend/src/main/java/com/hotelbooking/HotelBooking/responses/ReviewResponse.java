package com.hotelbooking.HotelBooking.responses;

import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.entity.property.Post;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
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
public class ReviewResponse {
	private Long id;
	private Long postId;
	private Long userId;
	private Integer comfortRate;
	private Integer staffRate;
	private Integer facilitiesRate;
	private Integer cleanlinessRate;
	private String comment;
	private Date createDate;
}
