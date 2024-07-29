function AdminSideBar() {
  return (
    <>
        <div className="sidebar left min-vh-100 pl-2">
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="http://via.placeholder.com/160x160"
                className="rounded-circle"
                alt="User Image"
              />
            </div>
            <div className="pull-left info pl-1">
              <p>bootstrap develop</p>
              <a href="#">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>
          <ul className="list-sidebar bg-defoult">
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#dashboard"
                className="collapsed active"
              >
                <i className="fa fa-th-large text-white" />
                <span className="nav-label text-white"> Dashboards </span>
                <span className="fa fa-chevron-left pull-right text-white" />
              </a>
              <ul className="sub-menu collapse" id="dashboard">
                <li className="active">
                  <a href="#">CSS3 Animation</a>
                </li>
                <li>
                  <a href="#">General</a>
                </li>
                <li>
                  <a href="#">Buttons</a>
                </li>
                <li>
                  <a href="#">Tabs &amp; Accordions</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">FontAwesome</a>
                </li>
                <li>
                  <a href="#">Slider</a>
                </li>
                <li>
                  <a href="#">Panels</a>
                </li>
                <li>
                  <a href="#">Widgets</a>
                </li>
                <li>
                  <a href="#">Bootstrap Model</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-diamond" />
                <span className="nav-label">Layouts</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#products"
                className="collapsed active"
              >
                <i className="fa fa-bar-chart-o text-white" />
                <span className="nav-label text-white">Graphs</span>
                <span className="fa fa-chevron-left pull-right text-white" />
              </a>
              <ul className="sub-menu collapse" id="products">
                <li className="active">
                  <a href="#">CSS3 Animation</a>
                </li>
                <li>
                  <a href="#">General</a>
                </li>
                <li>
                  <a href="#">Buttons</a>
                </li>
                <li>
                  <a href="#">Tabs &amp; Accordions</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">FontAwesome</a>
                </li>
                <li>
                  <a href="#">Slider</a>
                </li>
                <li>
                  <a href="#">Panels</a>
                </li>
                <li>
                  <a href="#">Widgets</a>
                </li>
                <li>
                  <a href="#">Bootstrap Model</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-laptop" />
                <span className="nav-label">Grid options</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#tables"
                className="collapsed active"
              >
                <i className="fa fa-table text-white" />
                <span className="nav-label text-white">Tables</span>
                <span className="fa fa-chevron-left pull-right text-white" />
              </a>
              <ul className="sub-menu collapse" id="tables">
                <li>
                  <a> Static Tables</a>
                </li>
                <li>
                  <a> Data Tables</a>
                </li>
                <li>
                  <a> Foo Tables</a>
                </li>
                <li>
                  <a> jqGrid</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#e-commerce"
                className="collapsed active"
              >
                <i className="fa fa-shopping-cart text-white" />
                <span className="nav-label text-white">E-commerce</span>
                <span className="fa fa-chevron-left pull-right text-white" />
              </a>
              <ul className="sub-menu collapse" id="e-commerce">
                <li>
                  <a> Products grid</a>
                </li>
                <li>
                  <a> Products list</a>
                </li>
                <li>
                  <a>Product edit</a>
                </li>
                <li>
                  <a> Product detail</a>
                </li>
                <li>
                  <a>Cart</a>
                </li>
                <li>
                  <a> Orders</a>
                </li>
                <li>
                  <a> Credit Card form</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
    </>
  );
}
export default AdminSideBar;
