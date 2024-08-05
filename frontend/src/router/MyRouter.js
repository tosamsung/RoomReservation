import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout.js";
import Home from "../components/user_pages/Home.js";
import Signin from "../components/user_pages/Signin.js";
import Signup from "../components/user_pages/Signup.js";
import BusinessLayout from "../layout/Business/BusinessLayout.js";
import RegisterBusiness from "../components/business_pages/RegisterBusiness.js";
import Page404 from "../components/other_pages/Page404.js";
import ProtectedRouter from "./ProtectRouter.js";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.js";
import GroupHomepage from "../components/business_pages/GroupHomepage.js";
import PropertyReviews from "../components/business_pages/PropertyReviews.js";
import ListProperty from "../components/business_pages/ListProperty.js";
import { StatisticsPage } from "../components/admin_pages/Statistics.js";
import AdminLayout from "../layout/Admin/AdminLayout.js";
import EmployeeCRUD from "../components/admin_pages/EmployeeCRUD.js";
import AdminSignin from "../components/admin_pages/AdminSignIn.js";
import Users from "../components/admin_pages/users.js";
import { AdminProvider } from "../context/AdminContext.js";
// import Posts from "../components/admin_pages/posts.js";

function MyRouter() {
  const { user } = useContext(AppContext);
  return (
    <>
      <Routes>
        {/*---------------------------- admin---------------------------- */}
        <Route
          path="/admin/signin"
          element={<AdminSignin></AdminSignin>}
        ></Route>
        <Route
          path="/admin"
          element={
            <AdminProvider>
              <AdminLayout></AdminLayout>
            </AdminProvider>
          }
        >
          <Route
            path="employee"
            element={<EmployeeCRUD></EmployeeCRUD>}
          ></Route>

          <Route path="users" element={<Users />}></Route>
          {/* <Route
            path="posts"
            element={<Posts />}>
              </Route> */}
          <Route path="statistics" element={<StatisticsPage />}></Route>
        </Route>
        {/*---------------------------- user---------------------------- */}
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route
          path="/registerbusiness"
          element={
            <ProtectedRouter redirectPath="/signin" isAllowed={user}>
              <RegisterBusiness></RegisterBusiness>
            </ProtectedRouter>
          }
        ></Route>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="" element={<Home></Home>}></Route>
        </Route>
        {/* -------------------------business ---------------------------*/}
        <Route
          path="/business"
          element={
            <ProtectedRouter
              redirectPath="/registerbusiness"
              isAllowed={user && user.haveBusinessAccount}
            >
              <BusinessLayout></BusinessLayout>
            </ProtectedRouter>
          }
        >
          <Route path="" element={<GroupHomepage></GroupHomepage>}></Route>
          <Route
            path="listproperty"
            element={<ListProperty></ListProperty>}
          ></Route>
          <Route
            path="reviews"
            element={<PropertyReviews></PropertyReviews>}
          ></Route>
        </Route>
        <Route path="/*" element={<Page404></Page404>}></Route>
      </Routes>
    </>
  );
}

export default MyRouter;
