import { useState } from "react";
import ProgressBar from "./business_component/progressbar";
import { Link } from "react-router-dom";
function ListProperty() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <ProgressBar max={100} current={progress}></ProgressBar>
      <div className="container-fluid bg-business vh-100">
        <div className="container pt-2 px-5 ">
          <div className="row">
            <ul className="uk-subnav uk-subnav-pill d-none" uk-switcher="">
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
            </ul>
            <div className="uk-switcher uk-margin col-9">
              {/* ------------------------------property name -----------------------*/}
              <div>
                <h2 className="f-robo fw700">What's the name of your place?</h2>
                <div className="row">
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
                    <Link
                      to="/business/listproperty"
                      className="btn bg-white p-2 px-3 text-white mr-2 btn-outline-primary"
                    >
                      <i className="fa-solid fa-chevron-left text-primary"></i>
                    </Link>
                    <a
                      href="#"
                      uk-switcher-item="next"
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
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
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
                      />
                    </div>
                    <label className="fw500 text-black mt-2">City</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
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
                    >
                      <i className="fa-solid fa-chevron-left text-primary"></i>
                    </a>
                    <a
                      href="#"
                      uk-switcher-item="next"
                      className="btn bg-blue p-2 px-5 text-white"
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
                  <div className="col-8 bg-white cs-rounded">
                    <p className="mt-2 mb-0 fs-small fw500">
                      This is the location we'll show guests on our site. Move
                      the map to find the exact location of your property, then
                      click to drop the pin.
                    </p>
                   
                  </div>
                  <div className="col-8 mt-2 d-flex justify-content-end p-0">
                    <a
                      href="#"
                      uk-switcher-item="previous"
                      className="btn bg-white p-2 px-3 text-white mr-2 btn-outline-primary"
                    >
                      <i className="fa-solid fa-chevron-left text-primary"></i>
                    </a>
                    <a
                      href="#"
                      uk-switcher-item="next"
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
      </div>
    </>
  );
}
export default ListProperty;
