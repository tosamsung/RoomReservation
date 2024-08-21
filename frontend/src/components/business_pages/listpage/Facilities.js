import React, { useEffect, useState } from "react";
import facilityService from "../../../service/FacilitiesService";
import Badge from "./Badge";

function Facilities({ clickedFacilities, setClickedFacilities }) {
  const [facilities, setFacilities] = useState([]);
  const [activeTab, setActiveTab] = useState("ENTERTAINMENT");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const data = await facilityService.getAllFacilities();
        setFacilities(data);
      } catch (error) {
        console.error("Failed to fetch facilities", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  const handleFacilityClick = (facilityName) => {
    setClickedFacilities((prev) => {
      if (prev.includes(facilityName)) {
        return prev.filter((name) => name !== facilityName);
      } else {
        return [...prev, facilityName];
      }
    });
  };

  const facilityTypes = [
    "ENTERTAINMENT",
    "RECREATION",
    "KITCHEN",
    "BATHROOM",
    "BEDROOM",
    "TRANSFER",
    "VIEW",
    "TOURS",
    "UTILLITIES",
  ];

  const filterFacilitiesByType = (type) => {
    return facilities.filter((facility) => facility.facilityType === type);
  };

  const groupedClickedFacilities = clickedFacilities.reduce((acc, facilityName) => {
    const facility = facilities.find(f => f.name === facilityName);
    if (facility) {
      const type = facility.facilityType;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(facilityName);
    }
    return acc;
  }, {});

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="row tab-content bg-white p-1 pt-2 cs-rounded">
        <ul className="nav nav-tabs col-12 mb-3 p-0">
          {facilityTypes.map((type) => (
            <li
              className={`nav-item col-lg-4 border border-1 cs-rounded mb-2 p-2 text-center cursor-pointer ${
                activeTab === type ? "bg-blue" : ""
              }`}
              key={type}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(type);
              }}
            >
              <a
                className={`fw-bolder ${
                  activeTab === type ? "text-white" : ""
                }`}
              >
                {type}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="uk-button uk-button-primary uk-margin-small-right px-2 mb-3 cs-rounded"
          type="button"
          uk-toggle="target: #modal-close-default"
        >
          Show Selected
        </button>
        {facilityTypes.map((type) => (
          <div
            key={type}
            className={`tab-pane fade ${
              activeTab === type ? "show active" : ""
            }`}
          >
            <ul>
              {filterFacilitiesByType(type).map((facility) => (
                <Badge
                  key={facility.name}
                  name={facility.name}
                  active={clickedFacilities.includes(facility.name)}
                  handleClick={() => handleFacilityClick(facility.name)}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div id="modal-close-default" uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body p-1">
          <button
            className="uk-modal-close-default"
            type="button"
            uk-close="true"
          />
          <div className="modal-body selected-facilities">
            {Object.keys(groupedClickedFacilities).map((type) => (
              <div key={type}>
                <h4>{type}</h4>
                <ul>
                  {groupedClickedFacilities[type].map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Facilities;