import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link, NavLink } from "react-router-dom";
import UserAuth from "../../service/UserAuth";
import { useNavigate } from "react-router-dom";

function BusinessHeader() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClickListProperty = () => {};
  const handleLogout = async () => {
    await UserAuth.logout();
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <header className=" bg-blue">
        <div className="container-fluid">
          <div className="row pt-2 px-1">
            <div className="col-10 col-lg-4 site-logo " data-aos="fade">
              <Link to="/" className="text-white">
                BUSINESS
              </Link>
            </div>

            {user && (
              <>
                <div className="ml-auto d-flex" data-aos="fade">
                  <div className="p-1 px-3 hover-effect mr-2 cursor-pointer cs-rounded">
                    <i className="fa-regular  fa-bell text-white"></i>
                  </div>
                  <div className="p-1 hover-effect cs-rounded mr-2">
                    <a href="index.html" className="text-white fw500 fs-small">
                      List your property
                    </a>
                  </div>
                </div>
                <div className="p-0 ">
                  <div className=" my-account px-2 cs-rounded cursor-pointer ">
                    <div className="h-100 pr-2">
                      <img
                        src="https://cdn-icons-png.freepik.com/512/168/168723.png"
                        className="rounded-circle img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pl-0">
                      <p className="m-0 text-white fw500">{user.username}</p>
                      <p className="m-0 text-warning fw500">Level 1</p>
                    </div>
                  </div>
                </div>
                <div
                  className="cs-rounded p-0 py-2"
                  uk-dropdown="pos: bottom-right; boundary: !.boundary; shift: false; flip: false;mode: click"
                >
                  <ul className="uk-nav uk-dropdown-nav">
                    <li className="hover-effect-dark px-2">
                      <a href="#" className="fw500 fs-small text-black">
                        &nbsp;<i className="fa-regular fa-user"></i>&nbsp;
                        Manage account
                      </a>
                    </li>
                    <li className="hover-effect-dark px-2">
                      <a href="#" className="fw500 fs-small text-black">
                        &nbsp;{" "}
                        <i className="fa-solid fa-cart-flatbed-suitcase"></i>
                        &nbsp; Booking
                      </a>
                    </li>
                    <li className="hover-effect-dark px-2">
                      <a href="#" className="fw500 fs-small text-black">
                        &nbsp; <i className="fa-regular fa-comments"></i>&nbsp;
                        Reviews
                      </a>
                    </li>
                    <li
                      className="hover-effect-dark px-2"
                      onClick={handleLogout}
                    >
                      <a href="#" className="fw500 fs-small text-black">
                        &nbsp;{" "}
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        &nbsp; Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="row px-5 justify-content-center">
            <div className="col-6">
              <div className="row">
                <NavLink
                  className={({ isActive }) =>
                    `col text-center business-p-btn ${
                      isActive ? "business-p-active" : ""
                    }`
                  }
                  to="/business"
                  end
                >
                  <div className="text-white fw500 fs-small">
                    Group homepage
                  </div>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `col text-center business-p-btn ${
                      isActive ? "business-p-active" : ""
                    }`
                  }
                  to="reviews"
                >
                  <div to="/" className="text-white fw500 fs-small">
                    Reviews
                  </div>
                </NavLink>
                <div className="col text-center business-p-btn" data-aos="fade">
                  <div to="/" className="text-white fw500 fs-small">
                    Finance
                  </div>
                </div>
                <div className="col text-center business-p-btn" data-aos="fade">
                  <div to="/" className="text-white fw500 fs-small">
                    Analytics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default BusinessHeader;
