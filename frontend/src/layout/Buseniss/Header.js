function Header() {
  return (
    <>
      <div>
        <header className="site-heade bg-blue">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-10 col-lg-4 site-logo " data-aos="fade">
                <a href="index.html" className="text-white">
                  Booking.com
                </a>
              </div>
              <div className="col-2 col-lg-8">
                <nav className="navbar navbar-expand-lg navbar-light ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon text-light" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link text-light " href="#">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">
                          Link
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <section className="site-hero bg-black ">
          <div
            className="h-100  banner row d-flex justify-content-center"
            style={{
              backgroundImage: "url(images/hero_2.jpg)",
              backgroundPosition: "center center",
            }}
          >
            <div className="col-4 mt-5">
              <h1 className=" mb-3 text-white d-inline-block f-robo heading1 title">
                The perfect home base for your special trip
              </h1>
              <p className="text-white heading2 ">
                Discover dreamy holiday homes all over the world
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Header;
