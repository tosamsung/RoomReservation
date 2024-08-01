package com.hotelbooking.HotelBooking.service.serviceinterface;

import com.hotelbooking.HotelBooking.entity.property.BreakfastDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BreakfastDetailService {
    Page<BreakfastDetail> getAllBreakfastDetails(Pageable pageable);
    BreakfastDetail create(BreakfastDetail breakfastDetail);
    BreakfastDetail update(BreakfastDetail breakfastDetail);
    void delete(Long id);
}