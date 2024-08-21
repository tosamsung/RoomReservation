import React from "react";

const TitleLocation = ({ title, location }) => (
  <div className="row ">
    <div className="col-12">
      <h1 className="f-robo ">{title}</h1>
      <p className="text-muted mb-0">{location}</p>
    </div>
  </div>
);

export default TitleLocation;
