import "../../css/register-business.css";
function RegisterBusiness() {
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
                <label htmlFor="your_email">Business name</label>
                <input
                  type="text"
                  name="your_email"
                  id="your_email"
                  className="input-text inputf4"
                  required
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                />
              </div>
              <div className="form-row">
                <label htmlFor="your_email">Business email</label>
                <input
                  type="text"
                  name="your_email"
                  id="your_email"
                  className="input-text inputf4"
                  required
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                />
              </div>
              <div className="form-row">
                <label htmlFor="password">Tax number</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="input-text inputf4"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="comfirm-password">Address</label>
                <input
                  type="text"
                  name="comfirm_password"
                  id="comfirm_password"
                  className="input-text inputf4"
                  required
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheck"
                />
                <label className="form-check-label" >
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>

              <div className="form-row-last">
                <input
                  type="submit"
                  name="register"
                  className="register"
                  defaultValue="Register"
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
