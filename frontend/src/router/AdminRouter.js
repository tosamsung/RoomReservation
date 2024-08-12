import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AdminSignin from "../components/admin_pages/AdminSignIn";
import AdminLayout from "../layout/Admin/AdminLayout";
import EmployeeCRUD from "../components/admin_pages/EmployeeCRUD";
import Users from "../components/admin_pages/users";
import { StatisticsPage } from "../components/admin_pages/Statistics";
import Page404 from "../components/other_pages/Page404";
import ProtectedRouter from "./ProtectRouter";
import { AdminContext } from "../context/AdminContext";

function AdminRouter() {
  const {admin} = useContext(AdminContext);

  return (
    <Routes>
      <Route path="/signin" element={<AdminSignin></AdminSignin>}></Route>
      <Route
        path="/"
        element={
          <ProtectedRouter
          isAllowed={admin}
          >
            <AdminLayout></AdminLayout>
          </ProtectedRouter>
        }
      >
        <Route path="employee" element={<EmployeeCRUD></EmployeeCRUD>}></Route>

        <Route path="users" element={<Users />}></Route>
        {/* <Route
          path="posts"
          element={<Posts />}>
            </Route> */}
        <Route path="statistics" element={<StatisticsPage />}></Route>
      </Route>
      <Route path="/*" element={<Page404></Page404>}></Route>
    </Routes>
  );
}
export default AdminRouter;
