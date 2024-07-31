import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSidebar";

import "../../css/adminlayout.css";
import { Outlet } from "react-router-dom";
function AdminLayout() {
  return (
    <>
      <div>
        <AdminHeader></AdminHeader>
        <div className="main">
          <aside className="row">
            <AdminSideBar></AdminSideBar>
            <Outlet></Outlet>
          </aside>
        </div>
      </div>
    </>
  );
}
export default AdminLayout;
