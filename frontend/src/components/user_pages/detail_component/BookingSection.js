import React from "react";

const BookingSection = ({ price, onSubmit }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">${price}/night</h4>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="checkin">Check-in</label>
            <input type="date" className="form-control" id="checkin" />
          </div>
          <div className="form-group">
            <label htmlFor="checkout">Check-out</label>
            <input type="date" className="form-control" id="checkout" />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Guests</label>
            <select className="form-control" id="guests">
              <option>1 guest</option>
              <option>2 guests</option>
              {/* Add more guest options as needed */}
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Book Now
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default BookingSection;
