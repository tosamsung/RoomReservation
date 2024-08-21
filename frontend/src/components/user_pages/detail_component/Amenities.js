import React from "react";

const Amenities = ({ amenities }) => (
  <div className="mb-4">
    <h4>Amenities</h4>
    <ul className="list-unstyled">
      {amenities.map((amenity, index) => (
        <li key={index}>
          <i className={`fa fa-${amenity.icon}`}></i> {amenity.name}
        </li>
      ))}
    </ul>
  </div>
);

export default Amenities;
