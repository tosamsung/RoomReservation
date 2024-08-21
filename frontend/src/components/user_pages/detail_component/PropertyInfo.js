import React from "react";

const PropertyInfo = ({ guests, bedrooms, beds, baths }) => {
  // Inline styles for the separators and layout
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px', // Spacing between items
  };

  const separatorStyle = {
    margin: '0 10px',
    color: '#333', // Customize separator color if needed
  };

  return (
    <div className="row mb-4">
      <div className="col-md-12">
        <div style={containerStyle}>
          <span>
            <strong>{guests} guests</strong>
          </span>
          <span style={separatorStyle}>|</span>
          <span>
            <strong>{bedrooms} bedrooms</strong>
          </span>
          <span style={separatorStyle}>|</span>
          <span>
            <strong>{beds} beds</strong>
          </span>
          <span style={separatorStyle}>|</span>
          <span>
            <strong>{baths} baths</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
