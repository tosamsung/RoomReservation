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
import AdminLayout from "../layout/Admin/AdminLayout.js";
import EmployeeCRUD from "../components/admin_pages/EmployeeCRUD.js";

function MyRouter() {
  const { user } = useContext(AppContext);
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminLayout></AdminLayout>}>
          <Route
            path="employeeCRUD"
            element={<EmployeeCRUD></EmployeeCRUD   >}
          ></Route>
        </Route>
        {/* -------------------------user ---------------------------*/}
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route
          path="/registerbusiness"
          element={<RegisterBusiness></RegisterBusiness>}
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
