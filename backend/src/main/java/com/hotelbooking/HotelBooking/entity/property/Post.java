package com.hotelbooking.HotelBooking.entity.property;

import java.util.Date;

import com.hotelbooking.HotelBooking.enums.PostStatus;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Post")
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "property_id", referencedColumnName = "id")
	private Property property;

	private String About;
	private String Space;
	private String Access;
    @Enumerated(EnumType.STRING)
	private PostStatus postStatus;
	@Column(nullable = false)
	private Date createDate;
	@PrePersist
	protected void onCreate() {
		createDate = new Date();
	}
}
