package com.hotelbooking.HotelBooking.entity.property;

import java.util.Date;

import com.hotelbooking.HotelBooking.entity.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Reviews")
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "post_id", referencedColumnName = "id")
	private Post post;
	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;
	
	private Integer comfortRate;
	private Integer staffRate;
	private Integer facilitiesRate;
	private Integer cleanlinessRate;

	private String comment;
	@Column(nullable = false)
	private Date createDate;
	@PrePersist
	protected void onCreate() {
		createDate = new Date();
	}
}
