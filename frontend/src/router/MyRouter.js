import { Route, Routes } from "react-router-dom";

import { useContext } from "react";
<<<<<<< HEAD
import { AppContext } from "../context/AppContext.js";
import GroupHomepage from "../components/business_pages/GroupHomepage.js";
import PropertyReviews from "../components/business_pages/PropertyReviews.js";
import ListProperty from "../components/business_pages/ListProperty.js";
import { StatisticsPage } from "../components/admin_pages/Statistics.js";
import AdminLayout from "../layout/Admin/AdminLayout.js";
import EmployeeCRUD from "../components/admin_pages/EmployeeCRUD.js";
import Users from "../components/admin_pages/users.js";
=======
import { AppContext, AppProvider } from "../context/AppContext.js";

import { AdminProvider } from "../context/AdminContext.js";
import UserRouter from "./UserRouter.js";
import AdminRouter from "./AdminRouter.js";
>>>>>>> 989e11214f9db2b51d10dacc39f5e0f60c10c606
// import Posts from "../components/admin_pages/posts.js";

function MyRouter() {
  const { user } = useContext(AppContext);
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/admin" element={<AdminLayout></AdminLayout>}>
          <Route
            path="employee"
            element={<EmployeeCRUD></EmployeeCRUD>}
          ></Route>
          <Route path="users" element={<Users />}></Route>
          {/* <Route path="posts" element={<Posts />}></Route> */}
          <Route path="statistics" element={<StatisticsPage />}></Route>
        </Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
=======
        {/*---------------------------- admin---------------------------- */}
>>>>>>> 989e11214f9db2b51d10dacc39f5e0f60c10c606
        <Route
          path="/admin/*"
          element={
            <AdminProvider>
              <AdminRouter />
            </AdminProvider>
          }
        />
        {/*---------------------------- user ---------------------------- */}
        <Route
          path="/*"
          element={
            <AppProvider>
              <UserRouter />
            </AppProvider>
          }
        />

      </Routes>
    </>
  );
}

export default MyRouter;
