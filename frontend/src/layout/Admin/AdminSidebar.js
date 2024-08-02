function AdminSideBar() {
  return (
    <>
      <nav id="sidebar" className="bg-blue">
        <div className="sidebar-header">
          <h1 className="text-white f-robo fwbolder m-0">Admin</h1>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Home
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Pages
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="list-unstyled CTAs">
          <li>
            <a
              href="https://bootstrapious.com/p/bootstrap-sidebar"
              className="article"
            >
              Back to airpnp
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default AdminSideBar;
