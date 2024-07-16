import "../../css/register-business.css";
import { useState, useEffect } from "react";
import BusinessService from "../../service/BusinessService";
import UserAuth from"../../service/UserAuth"
import { useNavigate } from "react-router-dom";

function RegisterBusiness() {
  const [business, setBusiness] = useState({
    name: "",
    email: "",
    taxIdentificationNumber: "",
    address: "",
  });
  const navigate = useNavigate();

  const handlieSubmit = async (e) => {
    e.preventDefault();
    try {
      await BusinessService.createBusiness(business);
      navigate("/business");

    } catch (error) {
      console.log("User has registered a business");
    }
  };
  return (
    <>
      <div className="form-v4">
        <div className="page-content">
          <div className="form-v4-content">
            <div className="form-left">
              <h2 className="text-white f-robo">Business account</h2>
              <p className="text-1">
                <span>Business Account</span> feature in our hotel booking
                project is designed to cater to the needs of corporate clients
                and organizations. This feature provides tailored
                functionalities and benefits that facilitate seamless and
                efficient booking management for businesses.
              </p>
              <p className="text-2">
                <span>Efficiency : </span> Simplifies the booking process,
                saving time and effort for travel managers and employees.
              </p>
              <p className="text-2">
                <span>Cost Savings : </span>
                Offers exclusive corporate rates and discounts, helping
                businesses reduce travel expenses.
              </p>
              <p className="text-2">
                <span>Data-Driven Insights : </span>
                Provides valuable insights into travel patterns and expenses,
                aiding in better decision-making and budget optimization.
              </p>
              <div className="form-left-last">
                {/* <input
                  type="submit"
                  name="account"
                  className="account"
                  defaultValue="Have An Account"
                /> */}
              </div>
            </div>
            <form className="form-detail" action="#" method="post" id="myform">
              <h2 className="f-robo">REGISTER FORM</h2>
              <div className="form-row">
                {/* <label htmlFor="your_email">Business name</label> */}
                <input
                  type="text"
                  className="input-text inputf4"
                  required
                  placeholder="Business name"
                  onChange={(e) => {
                    setBusiness((prevUser) => ({
                      ...prevUser,
                      name: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="form-row">
                {/* <label htmlFor="your_email">Business email</label> */}
                <input
                  type="text"
                  className="input-text inputf4"
                  required
                  placeholder="Business email"
                  onChange={(e) => {
                    setBusiness((prevUser) => ({
                      ...prevUser,
                      email: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="form-row">
                {/* <label htmlFor="password">Tax number</label> */}
                <input
                  type="text"
                  className="input-text inputf4"
                  required
                  placeholder="Tax number"
                  onChange={(e) => {
                    setBusiness((prevUser) => ({
                      ...prevUser,
                      taxIdentificationNumber: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="form-row">
                {/* <label htmlFor="comfirm-password">Address</label> */}
                <input
                  type="text"
                  className="input-text inputf4"
                  required
                  placeholder="Address"
                  onChange={(e) => {
                    setBusiness((prevUser) => ({
                      ...prevUser,
                      address: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheck"
                />
                <label className="form-check-label">
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>

              <div className="form-row-last">
                <input
                  type="submit"
                  name="register"
                  className="register"
                  defaultValue="Register"
                  onClick={handlieSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterBusiness;
