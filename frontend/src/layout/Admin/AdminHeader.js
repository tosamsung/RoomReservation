function AdminHeader() {
  const toggleSidebar = () => {
    const sidebar = document.querySelector("#sidebar");
    const content = document.querySelector("#content");

    if (sidebar) {
      sidebar.classList.toggle("active");
      content.classList.toggle("active");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light h-max-3rem">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-info"
            onClick={toggleSidebar}
          >
            <i className="fas fa-align-left" />
            {/* <span>Toggle Sidebar</span> */}
          </button>
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Page
                </a>
              </li>
              <li className="nav-item d-flex align-items-center ml-2">
                <img
                  src="https://cdn-icons-png.freepik.com/512/168/168723.png"
                  className="rounded-circle img-fluid"
                  alt="Profile"
                  style={{ width: "40px", height: "40px", marginRight: "8px" }}
                />
                <p className="m-0">test</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default AdminHeader;
