import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout.js";
import Home from "../components/user_pages/Home.js";
import Signin from "../components/user_pages/Signin.js";
import Signup from "../components/user_pages/Signup.js";
import BusinessLayout from "../layout/Business/BusinessLayout.js";
import RegisterBusiness from "../components/business_pages/RegisterBusiness.js";
import PageListProperty from "../components/business_pages/PageListProperty.js";

function MyRouter() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route
          path="/registerbusiness"
          element={<RegisterBusiness></RegisterBusiness>}
        ></Route>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="" element={<Home></Home>}></Route>
        </Route>
        <Route path="/business" element={<BusinessLayout></BusinessLayout>}>
          <Route path="" element={<PageListProperty></PageListProperty>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default MyRouter;
