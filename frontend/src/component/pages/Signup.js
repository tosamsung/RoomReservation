import { useState, useEffect } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
function Signup() {
  const [date, setDate] = useState(null);
  const handleBirthDateChange = (event) => {
    setDate(event);
    console.log(event);
  };
  return (
    <>
      <section className="text-center text-lg-start vh-100 bg-blue">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  ",
          }}
        />
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 ">
              <div
                className="card cascading-right bg-body-tertiary z-index1 shadow1"
                style={{ backdropFilter: "blur(30px)" }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                            placeholder="First name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            id="form3Example2"
                            className="form-control"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div
                      data-mdb-input-init
                      className="form-outline mb-4 form-control p-0"
                    >
                      <div className="uk-inline w-100 h-100">
                        <button
                          className="uk-button w-100 h-100 form-control text-left px-2"
                          type="button"
                        >
                          {" "}
                          <i className="fa-regular fa-calendar mr-2"></i>
                          {date && `${format(date, "dd-MMM-yyyy")}`}
                          {!date && "Birth date"}
                        </button>
                        <div
                          className="shadow1 border border-primary"
                          uk-dropdown="mode: click;pos: bottom-center;shift: false; flip: false"
                        >
                          <Calendar
                            onChange={handleBirthDateChange}
                            date={date}
                          />
                        </div>
                      </div>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                      />
                      <p
                        className="fw500 text-danger m-0 text-left mt-1"
                      >
                        <i className="fas fa-exclamation-triangle"></i> error
                      </p>
                    </div>
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue
                        id="form2Example33"
                        defaultChecked
                      />
                      <label
                        className="form-check-label fw500"
                        htmlFor="form2Example33"
                      >
                        Đồng ý với các{" "}
                        <a className="text-primary fw500">điều khoản</a>
                      </label>
                    </div>
                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>
                    <div className="text-center">
                      <p className="fw500">or sign up with:</p>
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0  o-hidden p-0  ">
              <img
                src="https://www.ghotel.com.my/assets/images/gurney-facade.jpg"
                className="w-100 rounded border shadow-4"
                alt="Ecommerce"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
