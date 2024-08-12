package com.hotelbooking.HotelBooking.dto.propertydto;

import java.util.Date;
import java.util.Set;

import com.hotelbooking.HotelBooking.enums.PropertyStatus;
import com.hotelbooking.HotelBooking.enums.PropertyType;
import com.hotelbooking.HotelBooking.enums.ReservationType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PropertyDTO {

    private Long id;

    @NotBlank(message = "Name is required")
    private String name;

    private String image;

    @NotNull(message = "Property type is required")
    private PropertyType propertyType;

    @NotNull(message = "Reservation type is required")
    private ReservationType reservationType;

    @NotNull(message = "Property status is required")
    private PropertyStatus propertyStatus;

    @NotNull(message = "Create date is required")
    private Date createDate;

    @NotBlank(message = "Address is required")
    private String address;

    @NotBlank(message = "City is required")
    private String city;

    @NotBlank(message = "Country is required")
    private String country;

    private Double latitude;

    private Double longitude;

    private ParkingDTO parkingDetail;

    private BreakfastDTO breakfastDetail;

    @NotNull(message = "Business ID is required")
    private Integer businessId;

    private Set<String> facilities;
}
