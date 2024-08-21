import React from "react";

const HostInfo = ({ hostName }) => (
  <div className="row mb-4">
    <div className="col-12">
      <h4>Hosted by {hostName}</h4>
      <p>Contact me for any questions you have about the property.</p>
      <button className="btn btn-outline-primary">Contact Host</button>
    </div>
  </div>
);

export default HostInfo;
