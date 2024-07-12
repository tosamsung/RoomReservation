import { Link } from "react-router-dom";
import ProgressBar from "../business_component/progressbar";

function PageListProperty() {
  return (
    <>
      <ProgressBar max={100} current={10}></ProgressBar>
      <div className="container">
        <h3 className="fw500 text-dark f-robo m-0">
          To get started,select the type of property
        </h3>
        <p className="mt-0 fw500">Type of property</p>
        <div className="row">
          <div className="card cs-rounded col-3 col-lg-2 ml-2">
            <img
              src="https://cdn.icon-icons.com/icons2/3760/PNG/512/apartment_flat_home_house_building_icon_231006.png"
              className="card-img-top p-3"
              alt="..."
            />

            <div className="card-body py-0">
              <h5 className="card-title fw700 f-robo text-center">Apartment</h5>
              <p className="card-text text-mute fw500 fs-small">
                a set of rooms for living in, usually on one floor of a large
                building.
              </p>
            </div>
            <Link
              to="#"
              className="card-link bg-blue text-white text-center fw500 cs-rounded mb-1"
            >
              Choose
            </Link>
          </div>
          <div className="card cs-rounded col-3 col-lg-2 ml-2">
            <img
              src="https://clipart-library.com/8300/1931/hotel-clipart-md.png"
              className="card-img-top p-3"
              alt="..."
            />

            <div className="card-body py-0">
              <h5 className="card-title fw700 f-robo text-center">
                Hotel,B&B & MORE
              </h5>
              <p className="card-text text-mute fw500 fs-small">
                a building where you pay to have a room to sleep in, and where
                you can sometimes eat meals.
              </p>
            </div>
            <a
              href="#"
              className="card-link bg-blue text-white text-center fw500 cs-rounded mb-1"
            >
              Choose
            </a>
          </div>
          <div className="card cs-rounded col-3 col-lg-2 ml-2">
            <img
              src="https://cdn-icons-png.freepik.com/512/7059/7059852.png"
              className="card-img-top p-3"
              alt="..."
            />

            <div className="card-body py-0">
              <h5 className="card-title fw700 f-robo text-center">Homestay</h5>
              <p className="card-text text-mute fw500 fs-small">
                a type of holiday or visit in which you stay in the home of a
                person you do not know.
              </p>
            </div>
            <a
              href="#"
              className="card-link bg-blue text-white text-center fw500 cs-rounded mb-1"
            >
              Choose
            </a>
          </div>
          <div className="card cs-rounded col-3 col-lg-2 ml-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4480/4480603.png"
              className="card-img-top p-3"
              alt="..."
            />

            <div className="card-body py-0">
              <h5 className="card-title fw700 f-robo text-center">
                Alternative places
              </h5>
              <p className="card-text text-mute fw500 fs-small">
                Property like boats,yacht,...
              </p>
            </div>
            <a
              href="#"
              className="card-link bg-blue text-white text-center fw500 cs-rounded mb-1"
            >
              Choose
            </a>
          </div>
        </div>
      </div>
      {/* <div>
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
        <div className="uk-switcher uk-margin">
          <div className="text-dark">
            Hello!
            <a href="#" uk-switcher-item="next">
              Switch to item 3
            </a>
          </div>
          <div>
            Hello again!
            <a href="#" uk-switcher-item="next">
              Next item
            </a>
          </div>
          <div>
            Bazinga!
            <a href="#" uk-switcher-item="previous">
              Previous item
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default PageListProperty;
