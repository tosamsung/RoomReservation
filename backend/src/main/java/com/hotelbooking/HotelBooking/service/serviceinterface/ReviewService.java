package com.hotelbooking.HotelBooking.service.serviceinterface;

import com.hotelbooking.HotelBooking.dto.PostDTO;
import com.hotelbooking.HotelBooking.dto.ReviewDTO;
import com.hotelbooking.HotelBooking.exceptions.DataNotFoundException;
import com.hotelbooking.HotelBooking.responses.ReviewResponse;
import com.hotelbooking.HotelBooking.responses.ReviewResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface ReviewService {
	Page<ReviewResponse> find(Pageable pageable);
	ReviewResponse create(ReviewDTO reviewDTO) throws DataNotFoundException;
	ReviewResponse update(ReviewDTO reviewDTO, Long id) throws DataNotFoundException;
	void delete(Long id) throws DataNotFoundException;
	ReviewResponse findById(Long id) throws DataNotFoundException;
}
