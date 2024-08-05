import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSidebar";

import "../../css/adminlayout.css";
import { Outlet } from "react-router-dom";
function AdminLayout() {
  return (
    <>
      <div className="wrapper">
        <AdminSideBar></AdminSideBar>
        <div id="content">
          <AdminHeader></AdminHeader>
          <Outlet></Outlet>
        </div>
      </div>
      
    </>
  );
}
export default AdminLayout;
