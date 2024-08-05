package com.hotelbooking.HotelBooking.service.serviceinterface;

import java.util.List;

import com.hotelbooking.HotelBooking.exceptions.DataNotFoundException;

public interface CrudService <Id, Dto, Response> {
    Response create(Dto dto) throws DataNotFoundException;
    Response update(Dto dto, Id id) throws DataNotFoundException;
    Response findById(Id id) throws DataNotFoundException;
    List<Response> findAll() throws DataNotFoundException;
    void delete(Id id);
}
