import React, { useContext, useState } from "react";
import UserAuthService from "../../service/UserAuth";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const {setUser}=useContext(AppContext)
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      if (!username.trim()) {
        setError("Invalid username or password");
      }

      if (!password.trim()) {
        setError("Invalid username or password");
      }
      return;
    }

    try {
      const userData = { username, password };
      const response = await UserAuthService.signin(userData);      
      setUser(response)
      navigate("/");
    } catch (error) {
      setError("Invalid username or password");
    }
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
                  <h2 className="fw-bold mb-5">Sign in</h2>
                  <form onSubmit={handleSubmit}>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
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
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign in
                    </button>
                    <div className="text-center">
                      <p>or sign up with:</p>
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
                src="https://lh5.googleusercontent.com/proxy/Rog8zPUmezS2_nWdySZQqi8AHYwfwzXVXBKpWfpZ27DmLCziI8JPjhwCs_DNaTuWpKCFeOxnG-SPyqhk9iPCMg1VAJfJ-_p864f4F2ka0vPt-MgHUFONsCUn6XX8dVWk0OxQ0g"
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

export default Signin;
