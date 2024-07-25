import { useState, useEffect, useRef } from "react";
import ProgressBar from "./business_component/ProgressBar";
import PropertyType from "./business_component/PropertyType";

import ResultMap from "./ResultMap";
import * as opencage from "opencage-api-client";
import UIkit from "uikit";
import DropdownCountry from "../util_component/DropdownCountry";
import DropdownCity from "../util_component/DropdownCity";
import ConfirmModal from "../util_component/ConfirmModal";

function ListProperty() {
  const openCageApiKey = "cca4b3c6f78f4a02aeb0648ec49e3593";
  //map state
  const [showMap, setShowMap] = useState(false);
  const [position, setPosition] = useState([51.505, -0.09]); // Default position
  const [response, setResponse] = useState({}); //response map
  const markerPosition = useRef({ lat: null, lng: null });

  //ui state
  const [activeTab, setActiveTab] = useState(
    parseInt(localStorage.getItem("activeTab")) || 0
  );
  const [progress, setProgress] = useState(0);
  //entity state
  const [property, setProperty] = useState(() => {
    const savedProperty = localStorage.getItem("property");
    return savedProperty
      ? JSON.parse(savedProperty)
      : {
          name: "",
          description: "",
          rate: 0,
          propertyType: "",
          reservationType: "Online",
          propertyStatus: "Available",
          address: "",
          city: "",
          country: "",
          lat: null,
          lng: null,
        };
  });
  const handleMap = (apikey, city, country) => {
    console.log("api call");
    const query = `${city}, ${country}`;
    opencage
      .geocode({ key: apikey, q: query })
      .then((response) => {
        if (response.results && response.results.length > 0) {
          const { lat, lng } = response.results[0].geometry;
          setPosition([lat, lng]);
        }
        setResponse(response);
      })
      .catch((err) => {
        console.error(err);
        setResponse({});
      });
  };
  useEffect(() => {
    UIkit.switcher(".uk-switcher").show(activeTab);
    setProgress(activeTab * 10);
  }, [activeTab]);
  useEffect(() => {
    setShowMap(false);
    markerPosition.current = { lat: null, lng: null };
  }, [property.city, property.country]);
  //store in local store ,prevent reset date when page reloaded
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  useEffect(() => {
    localStorage.setItem("property", JSON.stringify(property));
  }, [property]);

  return (
    <>
      <link rel="stylesheet" href="/css/semantic.min.css" />
      <ProgressBar max={100} current={progress}></ProgressBar>
      <div className="container-fluid bg-business min-vh-100">
        <div className="container pt-2 px-5 ">
          <div className="row">
            <ul
              className="uk-subnav uk-subnav-pill d-none"
              uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
            >
              <li className={activeTab === 0 ? "uk-active" : ""}>
                <a href="#">name</a>
              </li>
              <li className={activeTab === 1 ? "uk-active" : ""}>
                <a href="#">location</a>
              </li>
              <li className={activeTab === 2 ? "uk-active" : ""}>
                <a href="#">map</a>
              </li>
              <li className={activeTab === 3 ? "uk-active" : ""}>
                <a href="#">type</a>
              </li>
              <li className={activeTab === 4 ? "uk-active" : ""}>
                <a href="#">Item</a>
              </li>
            </ul>
            <div className="uk-switcher uk-margin col-7">
              {/* ------------------------------property name -----------------------*/}
              <div>
                <div className="row">
                  <h2 className="f-robo fw700">
                    What's the name of your place?
                  </h2>
                  <div className="col-8 bg-white cs-rounded">
                    <label className="fw500 text-black mt-2">
                      Property name
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        value={property.name}
                        onChange={(e) => {
                          setProperty((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-3 cs-rounded ml-2">
                    <div className="row bg-white p-2">
                      <p className=" fs-small fw500 text-black m-0">
                        <i className="fa-regular fa-thumbs-up"></i> What should
                        I consider when choosing a name?
                      </p>
                      <ul className="m-0 fs-small text-black fw500">
                        <li>Keep it short and catchy</li>
                        <li>Avoid abbreviations</li>
                        <li>Stick to the facts</li>
                      </ul>
                    </div>
                    <div className="row mt-2 bg-white p-2">
                      <p className=" fs-small fw500 text-black m-0">
                        <i className="fa-regular fa-lightbulb"></i> Why do I
                        need to name my property?
                      </p>
                      <p className="m-0 fs-small text-black">
                        This is the name that will appear as the title of your
                        listing on our site. It should tell guests something
                        specific about your place, where it is or what you
                        offer.This will be visible to anyone visiting our site,
                        so don't include your address in the name.
                      </p>
                    </div>
                  </div>
                  <div className="col-8 mt-2 d-flex justify-content-end p-0">
                    <a
                      onClick={() => {
                        if (property.name) {
                          setActiveTab(1);
                        }
                      }}
                      className="btn bg-blue p-2 px-5 text-white"
                    >
                      Continue
                    </a>
                  </div>
                </div>
              </div>
              {/* ------------------------------property location -----------------------*/}
              <div>
                <h2 className="f-robo fw700">
                  Where is the property you're listing?
                </h2>
                <div className="row">
                  <div className="col-8 bg-white cs-rounded">
                    <p className="mt-2 mb-0 fs-small fw500">
                      We may send a letter to confirm the location of your
                      property, so make sure that the address is correct – it’s
                      difficult to make changes to it later.
                    </p>
                    <label className="fw500 text-black mt-2">
                      Country/region
                    </label>
                    <div className="input-group mb-3">
                      <DropdownCountry
                        setValue={setProperty}
                        country={property.country}
                      />
                    </div>
                    <label className="fw500 text-black mt-2">City</label>
                    <div className="input-group mb-3">
                      <DropdownCity
                        country={property.country}
                        setValue={setProperty}
                        city={property.city}
                      />
                    </div>
                    <label className="fw500 text-black mt-2">
                      Street name and house number
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        value={property.address}
                        onChange={(e) => {
                          setProperty((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-3 cs-rounded ml-2">
                    <div className="row bg-white p-2">
                      <p className=" fs-small fw500 text-black m-0">
                        <i className="fa-regular fa-thumbs-up"></i> What needs
                        to be included in my address?
                      </p>
                      <ul className="m-0 fs-small text-black fw500">
                        <li>Include both your street name and house number</li>
                        <li>Correctly spell the street name</li>
                        <li>
                          Use the physical address of the property, not your
                          office or home address
                        </li>
                      </ul>
                    </div>
                    <div className="row mt-2 bg-white p-2">
                      <p className=" fs-small fw500 text-black m-0">
                        <i className="fa-regular fa-lightbulb"></i> Why do I
                        need to add my address?
                      </p>
                      <p className="m-0 fs-small text-black">
                        Once a guest books your property, this is the address
                        that will be shared with them. It's important that it is
                        correct so that guests can easily find your property.
                      </p>
                    </div>
                  </div>
                  <div className="col-8 mt-2 d-flex justify-content-end p-0">
                    <a
                      href="#"
                      uk-switcher-item="previous"
                      className="btn bg-white p-2 px-3 text-white mr-2 btn-outline-primary"
                      onClick={() => {
                        setActiveTab(0);
                      }}
                    >
                      <i className="fa-solid fa-chevron-left text-primary"></i>
                    </a>
                    <a
                      className="btn bg-blue p-2 px-5 text-white"
                      onClick={() => {
                        if (property.city && property.country) {
                          setActiveTab(2);
                        }
                      }}
                    >
                      Continue
                    </a>
                  </div>
                </div>
              </div>
              {/* ------------------------------property map -----------------------*/}
              <div>
                <h2 className="f-robo fw700">
                  Pin the location of your property
                </h2>
                <div className="row">
                  <div className="col-12 bg-white cs-rounded py-2">
                    <p className="mt-2 mb-0 fs-small fw500">
                      This is the location we'll show guests on our site. Move
                      the map to find the exact location of your property, then
                      click to drop the pin.
                    </p>
                    <a
                      onClick={() => {
                        setShowMap((prevShowMap) => !prevShowMap);
                        if (!showMap) {
                          handleMap(
                            openCageApiKey,
                            property.city,
                            property.country
                          );
                        }
                      }}
                      className="btn bg-secondary p-2 px-5 my-2 text-white d-block"
                    >
                      {showMap ? "Hide Map" : "Show Map"}
                    </a>
                    {showMap && (
                      <ResultMap
                        response={response}
                        position={[property.lat, property.lng]}
                        setValue={(newPosition) => {
                          markerPosition.current = newPosition; // Update ref
                        }}
                      />
                    )}
                  </div>
                  <div className="col-12 mt-2 d-flex justify-content-end p-0">
                    <a
                      className="btn bg-white p-2 px-3 text-white mr-2 btn-outline-primary"
                      onClick={() => {
                        setActiveTab(1);
                      }}
                    >
                      <i className="fa-solid fa-chevron-left text-primary"></i>
                    </a>
                    <ConfirmModal
                      icon={<i className="fa-solid fa-location-dot mr-2"></i>}
                      iconYes={<i className="fa-solid fa-xmark"></i>}
                      iconNo={<i className="fa-solid fa-check"></i>}
                      title={<p>Confirm your location</p>}
                      titleNo={"Cancel"}
                      titleYes={"Save"}
                      handleYes={() => {
                        setProperty((prev) => ({
                          ...prev,
                          lat: markerPosition.current.lat,
                          lng: markerPosition.current.lng,
                        }));
                        setActiveTab(3);
                      }}
                      content={
                        "Are you sure this is the exact location of your property?"
                      }
                      button={
                        <a className="btn bg-blue p-2 px-5 text-white">
                          Continue
                        </a>
                      }
                    />
                  </div>
                </div>
              </div>
              {/* ------------------------------property category -----------------------*/}
              <div>
                <h2 className="f-robo fw700">
                  From the list below, which property category is most similar
                  to your place?
                </h2>
                <div className="row bg-white p-1 pt-2 cs-rounded">
                  <PropertyType
                    image="/images/icon/homestay.png"
                    name="Homestay"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                  <PropertyType
                    image="/images/icon/hotel.png"
                    name="Hotel"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                  <PropertyType
                    image="/images/icon/Apartment.png"
                    name="Apartment"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                  <PropertyType
                    image="/images/icon/cabin.png"
                    name="Cabin"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                  <PropertyType
                    image="/images/icon/ship.png"
                    name="Boat"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                  <PropertyType
                    image="/images/icon/camping.png"
                    name="Tent"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                  <PropertyType
                    image="/images/icon/motel.png"
                    name="Motel"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                  <PropertyType
                    image="/images/icon/treehouse.png"
                    name="Tree house"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                  <PropertyType
                    image="/images/icon/house.png"
                    name="Guest house"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                  <PropertyType
                    image="/images/icon/resort.png"
                    name="Resort"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                  <PropertyType
                    image="/images/icon/lodge.png"
                    name="Lodge"
                    active={property.propertyType}
                    setValue={setProperty}
                  />
                </div>
                <div className="row mt-2 d-flex justify-content-end p-0">
                  <a
                    onClick={() => {
                      setActiveTab(2);
                    }}
                    className="btn bg-white p-2 px-3 text-white mr-2 btn-outline-primary"
                  >
                    <i className="fa-solid fa-chevron-left text-primary"></i>
                  </a>
                  <a
                    onClick={() => {
                      if (property.propertyType) {
                        setActiveTab(4);
                      }
                    }}
                    className="btn bg-blue p-2 px-5 text-white"
                  >
                    Continue
                  </a>
                </div>
              </div>
              {/* ------------------------------reservation type -----------------------*/}

              <div>
                <h2 className="f-robo fw700">
                  What type of place will guests have?
                </h2>
                <div className="row bg-white p-1 pt-2 cs-rounded">
                  <div className="col-12 mb-2">
                    <div className="border-gray cs-rounded p-2 cursor-pointer">
                      <img
                        src="/images/icon/all.png"
                        alt=""
                        className="category-icon mr-2 mb-2"
                      />
                      <h6 className="f-robo fwbolder m-0 d-inline-block">
                        An entire place
                      </h6>
                      <p className="m-0 fw500 fs-small ">
                        Guests have the whole place to themselves.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="border-gray cs-rounded p-2 cursor-pointer">
                      <img
                        src="/images/icon/room.png"
                        alt=""
                        className="category-icon mr-2 mb-2"
                      />
                      <h6 className="f-robo fwbolder m-0 d-inline-block">
                        A room
                      </h6>
                      <p className="m-0 fw500 fs-small">
                        Guests have their own room in a home, plus access to
                        shared spaces.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="border-gray cs-rounded p-2 cursor-pointer">
                      <img
                        src="/images/icon/shared-flat.png"
                        alt=""
                        className="category-icon mr-2 mb-2"
                      />
                      <h6 className="f-robo fwbolder m-0 d-inline-block">
                        A shared room
                      </h6>
                      <p className="m-0 fw500 fs-small">
                        Guests sleep in a room or common area that may be shared
                        with you or others.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-2 d-flex justify-content-end p-0">
                  <a
                    onClick={() => {
                      setActiveTab(3);
                    }}
                    className="btn bg-white p-2 px-3 text-white mr-2 btn-outline-primary"
                  >
                    <i className="fa-solid fa-chevron-left text-primary"></i>
                  </a>
                  <a
                    onClick={() => {
                      setActiveTab(5);
                    }}
                    className="btn bg-blue p-2 px-5 text-white"
                  >
                    Continue
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListProperty;
