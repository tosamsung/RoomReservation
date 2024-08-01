package com.hotelbooking.HotelBooking.service;

import com.hotelbooking.HotelBooking.entity.property.BreakfastDetail;
import com.hotelbooking.HotelBooking.repository.BreakfastDetailRepository;
import com.hotelbooking.HotelBooking.service.serviceinterface.BreakfastDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BreakfastDetailServiceImpl implements BreakfastDetailService {

    @Autowired
    private BreakfastDetailRepository breakfastDetailRepository;

    @Override
    public Page<BreakfastDetail> getAllBreakfastDetails(Pageable pageable) {
        return breakfastDetailRepository.findAll(pageable);
    }

    @Override
    public BreakfastDetail create(BreakfastDetail breakfastDetail) {
        return breakfastDetailRepository.save(breakfastDetail);
    }

    @Override
    public BreakfastDetail update(BreakfastDetail breakfastDetail) {
        return breakfastDetailRepository.save(breakfastDetail);
    }

    @Override
    public void delete(Long id) {
        breakfastDetailRepository.deleteById(id);
    }
}
