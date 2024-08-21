import { useState, useEffect, useRef } from "react";
import ProgressBar from "../business_component/ProgressBar";
import PropertyType from "../business_component/PropertyType";

import ResultMap from "./ResultMap";
import * as opencage from "opencage-api-client";
import UIkit from "uikit";
import DropdownCountry from "../../util_component/DropdownCountry";
import DropdownCity from "../../util_component/DropdownCity";
import ConfirmModal from "../../util_component/ConfirmModal";
import ParkingAndBreakfast from "./ParkingAndBreakfast";
import Facilities from "./Facilities";
import PropertyImages from "./PropertyImages";

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
  const [clickedFacilities, setClickedFacilities] = useState(() => {
    const savedFacilities = localStorage.getItem("selectedFacilities");
    return savedFacilities ? JSON.parse(savedFacilities) : [];
  });

  const [property, setProperty] = useState(() => {
    const savedProperty = localStorage.getItem("property");
    return savedProperty
      ? JSON.parse(savedProperty)
      : {
          name: "",
          description: "",
          rate: 0,
          propertyType: "",
          reservationType: "",
          propertyStatus: "",
          address: "",
          city: "",
          country: "",
          lat: null,
          lng: null,
          parkingDetail: null,
          breakfastDetail: null,
        };
  });
  const handleMap = (apikey, city, country) => {
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
    setShowMap(false);
    markerPosition.current = { lat: null, lng: null };
  }, [property.city, property.country]);
  //store in local store ,prevent reset date when page reloaded

  // useEffect(() => {
  //   localStorage.setItem(
  //     "selectedImages",
  //     JSON.stringify(selectedImages)
  //   );
  // }, [selectedImages]);
  useEffect(() => {
    localStorage.setItem(
      "selectedFacilities",
      JSON.stringify(clickedFacilities)
    );
  }, [clickedFacilities]);
  useEffect(() => {
    localStorage.setItem("property", JSON.stringify(property));
  }, [property]);
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  return (
    <>
      <link rel="stylesheet" href="/css/semantic.min.css" />
      <ProgressBar></ProgressBar>
      <div className="container-fluid bg-business min-vh-100">
        <div className="container pt-2 px-5">
          <div className="row">
            <div className="col-8">
              <div className="tab-content" id="pills-tabContent">
                {/* Property Name Tab */}
                <div
                  className={`tab-pane fade ${
                    activeTab === 0 ? "show active" : ""
                  }`}
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
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
                        <p className="fs-small fw500 text-black m-0">
                          <i className="fa-regular fa-thumbs-up"></i> What
                          should I consider when choosing a name?
                        </p>
                        <ul className="m-0 fs-small text-black fw500">
                          <li>Keep it short and catchy</li>
                          <li>Avoid abbreviations</li>
                          <li>Stick to the facts</li>
                        </ul>
                      </div>
                      <div className="row mt-2 bg-white p-2">
                        <p className="fs-small fw500 text-black m-0">
                          <i className="fa-regular fa-lightbulb"></i> Why do I
                          need to name my property?
                        </p>
                        <p className="m-0 fs-small text-black">
                          This is the name that will appear as the title of your
                          listing on our site. It should tell guests something
                          specific about your place, where it is or what you
                          offer. This will be visible to anyone visiting our
                          site, so don't include your address in the name.
                        </p>
                      </div>
                    </div>
                    <div className="col-8 mt-2 d-flex justify-content-end p-0">
                      <button
                        onClick={() => {
                          if (property.name) {
                            setActiveTab(1);
                          }
                        }}
                        className="btn bg-blue p-2 px-5 text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                {/* Property Location Tab */}
                <div
                  className={`tab-pane fade ${
                    activeTab === 1 ? "show active" : ""
                  }`}
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <h2 className="f-robo fw700">
                    Where is the property you're listing?
                  </h2>
                  <div className="row">
                    <div className="col-8 bg-white cs-rounded">
                      <p className="mt-2 mb-0 fs-small fw500">
                        We may send a letter to confirm the location of your
                        property, so make sure that the address is correct –
                        it’s difficult to make changes to it later.
                      </p>
                      {/* <label className="fw500 text-black mt-2">
                        Country/region
                      </label>
                      <div className="input-group mb-3">
                        <DropdownCountry
                          setValue={setProperty}
                          country={property.country}
                        />
                      </div> */}
                      <label className="fw500 text-black mt-2">City</label>
                      <div className="input-group mb-3">
                        <DropdownCity
                          country={"Vietnam"}
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
                        <p className="fs-small fw500 text-black m-0">
                          <i className="fa-regular fa-thumbs-up"></i> What
                          should I consider when choosing a location?
                        </p>
                        <ul className="m-0 fs-small text-black fw500">
                          <li>Make sure your address is accurate</li>
                          <li>Provide nearby landmarks if necessary</li>
                        </ul>
                      </div>
                      <div className="row mt-2 bg-white p-2">
                        <p className="fs-small fw500 text-black m-0">
                          <i className="fa-regular fa-lightbulb"></i> Why do I
                          need to specify the location?
                        </p>
                        <p className="m-0 fs-small text-black">
                          The location is important for guests to understand
                          where your property is located. It helps with the
                          search and visibility on our platform.
                        </p>
                      </div>
                    </div>
                    <div className="col-8 mt-2 d-flex justify-content-end p-0">
                      <button
                        onClick={() => setActiveTab(0)}
                        className="btn bg-white p-2 px-3 mr-2 btn-outline-primary"
                      >
                        <i className="fa-solid fa-chevron-left text-primary"></i>
                      </button>
                      <button
                        onClick={() => {
                          if (
                            property.country &&
                            property.city &&
                            property.address
                          ) {
                            setActiveTab(2);
                          }
                        }}
                        className="btn bg-blue p-2 px-5 text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                {/* Map Tab */}
                <div
                  className={`tab-pane fade ${
                    activeTab === 2 ? "show active" : ""
                  }`}
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="row">
                    <h2 className="f-robo fw700 mb-1">
                      Where is your property located?
                    </h2>
                    <div className="col-12 mt-2 p-2 bg-white cs-rounded">
                      {/* Here you would integrate your map component */}
                      {showMap ? (
                        <>
                          <ResultMap
                            response={response}
                            position={[property.lat, property.lng]}
                            setValue={(newPosition) => {
                              markerPosition.current = newPosition; // Update ref
                            }}
                          />
                        </>
                      ) : (
                        <button
                          className="btn btn-primary"
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
                        >
                          Show Map
                        </button>
                      )}
                    </div>
                    <div className="col-12 mt-2">
                      <div className="my-2"></div>
                      <button
                        onClick={() => setActiveTab(1)}
                        className="btn bg-white p-2 px-3 mr-2 btn-outline-primary"
                      >
                        <i className="fa-solid fa-chevron-left text-primary"></i>
                      </button>

                      <ConfirmModal
                        icon={<i className="fa-solid fa-location-dot mr-2"></i>}
                        iconYes={<i className="fa-solid fa-xmark"></i>}
                        iconNo={<i className="fa-solid fa-check"></i>}
                        title={<p>Confirm your location</p>}
                        titleNo={"Cancel"}
                        titleYes={"Save"}
                        handleYes={() => {
                          if (showMap) {
                            setProperty((prev) => ({
                              ...prev,
                              lat: markerPosition.current.lat,
                              lng: markerPosition.current.lng,
                            }));
                          }

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
                {/* Category Tab */}
                <div
                  className={`tab-pane fade ${
                    activeTab === 3 ? "show active" : ""
                  }`}
                  id="pills-category"
                  role="tabpanel"
                  aria-labelledby="pills-category-tab"
                >
                  <h2 className="f-robo fw700">
                    What type of property is this?
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
                    <button
                      onClick={() => setActiveTab(2)}
                      className="btn bg-white p-2 px-3 text-white mr-2 btn-outline-primary"
                    >
                      <i className="fa-solid fa-chevron-left text-primary"></i>
                    </button>
                    <button
                      onClick={() => {
                        if (property.propertyType) {
                          setActiveTab(4);
                        }
                      }}
                      className="btn bg-blue p-2 px-5 text-white"
                    >
                      Continue
                    </button>
                  </div>
                </div>
                {/* Type Tab */}
                <div
                  className={`tab-pane fade ${
                    activeTab === 4 ? "show active" : ""
                  }`}
                  id="pills-type"
                  role="tabpanel"
                  aria-labelledby="pills-type-tab"
                >
                  <h2 className="f-robo fw700">
                    What type of place will guests have?
                  </h2>
                  <div className="row">
                    <div className="col-9 bg-white p-2 cs-rounded">
                      <div
                        className="col-12 mb-2"
                        onClick={() => {
                          setProperty((prev) => ({
                            ...prev,
                            reservationType: "ENTIRE",
                          }));
                        }}
                      >
                        <div
                          className={`border-gray cs-rounded p-2 cursor-pointer ${
                            property.reservationType === "ENTIRE"
                              ? "border-orange"
                              : ""
                          }`}
                        >
                          <img
                            src="/images/icon/all.png"
                            alt=""
                            className="category-icon mr-2 mb-2"
                          />
                          <h6
                            className={`f-robo fwbolder m-0 d-inline-block ${
                              property.reservationType === "ENTIRE"
                                ? "text-orange"
                                : ""
                            }`}
                          >
                            An entire place
                          </h6>
                          <p className="m-0 fw500 fs-small ">
                            Guests have the whole place to themselves.
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 mb-2"
                        onClick={() => {
                          setProperty((prev) => ({
                            ...prev,
                            reservationType: "ROOM",
                          }));
                        }}
                      >
                        <div
                          className={`border-gray cs-rounded p-2 cursor-pointer ${
                            property.reservationType === "ROOM"
                              ? "border-orange"
                              : ""
                          }`}
                        >
                          <img
                            src="/images/icon/room.png"
                            alt=""
                            className="category-icon mr-2 mb-2"
                          />
                          <h6
                            className={`f-robo fwbolder m-0 d-inline-block ${
                              property.reservationType === "ROOM"
                                ? "text-orange"
                                : ""
                            }`}
                          >
                            A room
                          </h6>
                          <p className="m-0 fw500 fs-small">
                            Guests have their own room in a home, plus access to
                            shared spaces.
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 mb-2"
                        onClick={() => {
                          setProperty((prev) => ({
                            ...prev,
                            reservationType: "SHARED",
                          }));
                        }}
                      >
                        <div
                          className={`border-gray cs-rounded p-2 cursor-pointer ${
                            property.reservationType === "SHARED"
                              ? "border-orange"
                              : ""
                          }`}
                        >
                          <img
                            src="/images/icon/shared-flat.png"
                            alt=""
                            className="category-icon mr-2 mb-2"
                          />
                          <h6
                            className={`f-robo fwbolder m-0 d-inline-block ${
                              property.reservationType === "SHARED"
                                ? "text-orange"
                                : ""
                            }`}
                          >
                            A shared room
                          </h6>
                          <p className="m-0 fw500 fs-small">
                            Guests sleep in a room or common area that may be
                            shared with you or others.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-9 mt-2 d-flex justify-content-end p-0">
                      <button
                        onClick={() => setActiveTab(3)}
                        className="btn bg-white p-2 px-3 mr-2 btn-outline-primary"
                      >
                        <i className="fa-solid fa-chevron-left text-primary"></i>
                      </button>
                      <button
                        onClick={() => {
                          if (property.reservationType) {
                            setActiveTab(5);
                          }
                        }}
                        className="btn bg-blue p-2 px-5 text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                {/* Parking vs Breakfast Tab */}
                <div
                  className={`tab-pane fade ${
                    activeTab === 5 ? "show active" : ""
                  }`}
                  id="pills-parking-breakfast"
                  role="tabpanel"
                  aria-labelledby="pills-parking-breakfast-tab"
                >
                  <h2 className="f-robo fw700">Parking and breakfast</h2>
                  <div className="row">
                    <div className="col-8 bg-white cs-rounded">
                      <ParkingAndBreakfast
                        setValue={setProperty}
                        value={property}
                      ></ParkingAndBreakfast>
                    </div>
                    <div className="col-3 cs-rounded ml-2">
                      <div className="row bg-white p-2">
                        <p className="fs-small fw500 text-black m-0">
                          <i className="fa-regular fa-thumbs-up"></i> What
                          should I consider when choosing parking or breakfast
                          options?
                        </p>
                        <ul className="m-0 fs-small text-black fw500">
                          <li>Decide what amenities you can offer</li>
                          <li>Consider the preferences of your guests</li>
                        </ul>
                      </div>
                      <div className="row mt-2 bg-white p-2">
                        <p className="fs-small fw500 text-black m-0">
                          <i className="fa-regular fa-lightbulb"></i> Why do I
                          need to specify these options?
                        </p>
                        <p className="m-0 fs-small text-black">
                          Providing accurate information about amenities helps
                          guests make informed decisions.
                        </p>
                      </div>
                    </div>
                    <div className="col-8 mt-2 d-flex justify-content-end p-0">
                      <button
                        onClick={() => setActiveTab(4)}
                        className="btn bg-white p-2 px-3 mr-2 btn-outline-primary"
                      >
                        <i className="fa-solid fa-chevron-left text-primary"></i>
                      </button>
                      <button
                        onClick={() => setActiveTab(6)}
                        className="btn bg-blue p-2 px-5 text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                {/* Summary Tab */}
                <div
                  className={`tab-pane fade ${
                    activeTab === 6 ? "show active" : ""
                  }`}
                  id="pills-summary"
                  role="tabpanel"
                  aria-labelledby="pills-summary-tab"
                >
                  <h2 className="f-robo fw700">Facilities , Views</h2>
                  <div className="row">
                    <div className="col-9 bg-white cs-rounded">
                      <Facilities
                        clickedFacilities={clickedFacilities}
                        setClickedFacilities={setClickedFacilities}
                      ></Facilities>
                    </div>
                    <div className="col-9 mt-2 d-flex justify-content-end p-0">
                      <button
                        onClick={() => setActiveTab(5)}
                        className="btn bg-white p-2 px-3 mr-2 btn-outline-primary"
                      >
                        <i className="fa-solid fa-chevron-left text-primary"></i>
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab(7);
                        }}
                        className="btn bg-blue p-2 px-5 text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                {/* property image */}
                <div
                  className={`tab-pane fade ${
                    activeTab === 7 ? "show active" : ""
                  }`}
                  id="pills-summary"
                  role="tabpanel"
                  aria-labelledby="pills-summary-tab"
                >
                  <h2 className="f-robo fw700">Property images</h2>
                  <div className="row">
                    <div className="col-8 bg-white cs-rounded p-2">
                      <p className="mt-2 mb-0 fs-small fw500 mb-2">
                        The first image you choose will be the one users see
                        when it appears on the web.
                      </p>
                      <PropertyImages></PropertyImages>
                    </div>
                    <div className="col-3 cs-rounded ml-2">
                      <div className="row mt-2 bg-white p-2">
                        <p className="fs-small fw500 text-black m-0">
                          <i className="fa-solid fa-info-circle"></i> Note on
                          Image Selection
                        </p>
                        <p className="m-0 fs-small text-black">
                          The first image you choose will be the one users see
                          when it appears on the web.
                        </p>
                      </div>
                      <div className="row bg-white p-2">
                        <p className="fs-small fw500 text-black m-0">
                          <i className="fa-regular fa-image"></i> How to Select
                          the Best Images?
                        </p>
                        <ul className="m-0 fs-small text-black fw500">
                          <li>
                            Choose high-resolution images to ensure clarity and
                            detail.
                          </li>
                          <li>
                            Select images that best represent the property or
                            product.
                          </li>
                          <li>
                            Ensure images are well-lit and accurately showcase
                            the space or item.
                          </li>
                          <li>
                            Avoid using images with watermarks or text overlays.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-8 mt-2 d-flex justify-content-end p-0">
                      <button
                        onClick={() => setActiveTab(6)}
                        className="btn bg-white p-2 px-3 mr-2 btn-outline-primary"
                      >
                        <i className="fa-solid fa-chevron-left text-primary"></i>
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab(8);
                        }}
                        className="btn bg-blue p-2 px-5 text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                {/* bedroom */}
                <div
                  className={`tab-pane fade ${
                    activeTab === 8 ? "show active" : ""
                  }`}
                  id="pills-summary"
                  role="tabpanel"
                  aria-labelledby="pills-summary-tab"
                >
                  <h2 className="f-robo fw700">Bedroom</h2>
                  <div className="row">
                    <div className="col-8 bg-white cs-rounded p-2">
                      <p className="mt-2 mb-0 fs-small fw500 mb-2">
                        The first image you choose will be the one users see
                        when it appears on the web.
                      </p>
                      
                    </div>
                    <div className="col-3 cs-rounded ml-2">
                      <div className="row mt-2 bg-white p-2">
                        <p className="fs-small fw500 text-black m-0">
                          <i className="fa-solid fa-info-circle"></i> Note on
                          Image Selection
                        </p>
                        <p className="m-0 fs-small text-black">
                          The first image you choose will be the one users see
                          when it appears on the web.
                        </p>
                      </div>
                      <div className="row bg-white p-2">
                        <p className="fs-small fw500 text-black m-0">
                          <i className="fa-regular fa-image"></i> How to Select
                          the Best Images?
                        </p>
                        <ul className="m-0 fs-small text-black fw500">
                          <li>
                            Choose high-resolution images to ensure clarity and
                            detail.
                          </li>
                          <li>
                            Select images that best represent the property or
                            product.
                          </li>
                          <li>
                            Ensure images are well-lit and accurately showcase
                            the space or item.
                          </li>
                          <li>
                            Avoid using images with watermarks or text overlays.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-8 mt-2 d-flex justify-content-end p-0">
                      <button
                        onClick={() => setActiveTab(6)}
                        className="btn bg-white p-2 px-3 mr-2 btn-outline-primary"
                      >
                        <i className="fa-solid fa-chevron-left text-primary"></i>
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab(8);
                        }}
                        className="btn bg-blue p-2 px-5 text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
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
