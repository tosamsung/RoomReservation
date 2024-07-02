import { useState, useEffect } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import UserAuth from "../../service/UserAuth";
function Signup() {
  const [date, setDate] = useState(null);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    birthDate: "",
  });
  const validForm = () => {
    if (
      !user.firstname.trim() ||
      !user.lastname.trim() ||
      !user.username.trim() ||
      !user.phone.trim() ||
      !user.email.trim() ||
      !user.password.trim() ||
      !user.birthDate.trim()
    ) {
      console.log("trong");
      const otherError = document.getElementById("other-error");

      otherError.innerHTML = `
    <div>
      <i class="fas fa-exclamation-triangle"></i> 
      Please fill in all the required fields.
    </div>`;
      return false;
    }
    // Ví dụ: kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user.email)) {
      console.log("Email không hợp lệ");
      return false;
    }

    // Ví dụ: kiểm tra độ dài mật khẩu
    if (user.password.length < 8) {
      console.log("Mật khẩu phải có ít nhất 6 ký tự");
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    if (validForm()) {
      await UserAuth.signup(user);
    }
  };
  const handleBirthDateChange = (event) => {
    setDate(event);
    setUser((prevUser) => ({
      ...prevUser,
      birthDate: event,
    }));
  };
  return (
    <>
      <section className="text-center text-lg-start bg-blue">
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
                            className="form-control"
                            placeholder="First name"
                            onChange={(e) => {
                              setUser((prevUser) => ({
                                ...prevUser,
                                firstname: e.target.value,
                              }));
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            onChange={(e) => {
                              setUser((prevUser) => ({
                                ...prevUser,
                                lastname: e.target.value,
                              }));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        onChange={(e) => {
                          setUser((prevUser) => ({
                            ...prevUser,
                            username: e.target.value,
                          }));
                        }}
                      />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => {
                          setUser((prevUser) => ({
                            ...prevUser,
                            email: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone number"
                        onChange={(e) => {
                          setUser((prevUser) => ({
                            ...prevUser,
                            phone: e.target.value,
                          }));
                        }}
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
                        onChange={(e) => {
                          setUser((prevUser) => ({
                            ...prevUser,
                            password: e.target.value,
                          }));
                        }}
                      />
                      <p className="fw500 text-danger m-0 text-left mt-1">
                        <i className="fas fa-exclamation-triangle"></i> error
                      </p>
                    </div>
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue
                        defaultChecked
                      />
                      <label className="form-check-label fw500">
                        Đồng ý với các{" "}
                        <a className="text-primary fw500">điều khoản</a>
                      </label>
                    </div>
                    <p
                      className="fw500 text-danger m-0 text-center mt-1"
                      id="other-error"
                    ></p>
                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-block mb-4"
                      onClick={handleSubmit}
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
