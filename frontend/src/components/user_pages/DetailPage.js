import React from "react";
import TitleLocation from "./detail_component/TitleLocation";
import ImageGallery from "./detail_component/ImageGallery";
import PropertyInfo from "./detail_component/PropertyInfo";
import Description from "./detail_component/Description";
import Amenities from "./detail_component/Amenities";
import BookingSection from "./detail_component/BookingSection";
import Reviews from "./detail_component/Reviews";
import Map from "./detail_component/Map";
import HostInfo from "./detail_component/HostInfo";

const DetailPage = () => {
    const images = [
        "https://via.placeholder.com/1200x800.png?text=Large+Image+1",
        "https://via.placeholder.com/400x300.png?text=Small+Image+1",
        "https://via.placeholder.com/400x300.png?text=Small+Image+2",
        "https://via.placeholder.com/400x300.png?text=Small+Image+3",
        "https://via.placeholder.com/400x300.png?text=Small+Image+4",
        "https://via.placeholder.com/400x300.png?text=Small+Image+5",
        // "https://via.placeholder.com/400x300.png?text=Small+Image+6",
        // "https://via.placeholder.com/400x300.png?text=Small+Image+7",
        // "https://via.placeholder.com/400x300.png?text=Small+Image+8"
      ];
    
      const aboutText = "This property is a cozy place located in the heart of the city with sssssssssssssssssssssdsdasdasdssssall amenitiesddddddddsadas dddddddddddddddddddddddddddddddddddddddddddddddd.";
      const spaceText = "The space includes a large living room, two bedrooms, and a fully equipped kitchen.";
      const accessText = "Guests have access to all facilities incldddddddddddddddddddddddddduding the pool, gym, and free Wi-Fi.";
    

  const amenities = [
    { icon: "wifi", name: "Free Wi-Fi" },
    { icon: "tv", name: "TV" },
    { icon: "coffee", name: "Coffee Maker" },
    // Add more amenities as needed
  ];

  const reviews = [
    { name: "John Doe", date: "July 2024", text: "Amazing place, had a great time!" },
    // Add more reviews as needed
  ];

  return (
    <div className="container mt-5">
      <TitleLocation title="Beautiful Beachfront Villa" location="Vũng Tàu, Vietnam" />
      <ImageGallery images={images} />
      <div className="row mb-4">
        <div className="col-md-8">
          <PropertyInfo guests={4} bedrooms={2} beds={3} baths={2} />
          <Description about={aboutText} space={spaceText} access={accessText} />
          <Amenities amenities={amenities} />
          <Reviews reviews={reviews} />
        </div>
        <BookingSection price={200} />
      </div>
      <Map />
      <HostInfo hostName="Jane" />
    </div>
  );
};

export default DetailPage;
