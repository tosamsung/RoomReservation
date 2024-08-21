import React from "react";

const Reviews = ({ reviews }) => (
  <div className="row mb-4">
    <div className="col-12">
      <h4>Reviews</h4>
      {reviews.map((review, index) => (
        <div className="mb-3" key={index}>
          <strong>{review.name}</strong> <span className="text-muted">{review.date}</span>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Reviews;
