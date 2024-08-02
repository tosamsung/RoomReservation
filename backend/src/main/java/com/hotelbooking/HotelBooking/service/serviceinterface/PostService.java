package com.hotelbooking.HotelBooking.service.serviceinterface;

import com.hotelbooking.HotelBooking.dto.PostDTO;
import com.hotelbooking.HotelBooking.dto.UserUpdateDTO;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.exceptions.DataNotFoundException;
import com.hotelbooking.HotelBooking.responses.PostResponse;
import com.hotelbooking.HotelBooking.responses.PostResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface PostService {
	Page<PostResponse> find(Pageable pageable);
	PostResponse create(PostDTO postDTO) throws DataNotFoundException;
	PostResponse update(PostDTO postDTO, Long id) throws DataNotFoundException;
	void delete(Long id) throws DataNotFoundException;
	PostResponse findById(Long id) throws DataNotFoundException;
}
