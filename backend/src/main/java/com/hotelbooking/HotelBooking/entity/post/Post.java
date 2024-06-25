package com.hotelbooking.HotelBooking.entity.post;

import java.util.Date;

import com.hotelbooking.HotelBooking.entity.property.Property;
import com.hotelbooking.HotelBooking.enums.PostStatus;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Posts")
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @Enumerated(EnumType.STRING)
	private PostStatus postStatus;
	private Date createDate;
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "property_id", referencedColumnName = "id")
    private Property property;
}
