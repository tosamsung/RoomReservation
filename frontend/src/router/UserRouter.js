import { useContext } from "react";
import Signup from "../components/user_pages/Signup";
import Signin from "../components/user_pages/Signin";
import ProtectedRouter from "./ProtectRouter";
import RegisterBusiness from "../components/business_pages/RegisterBusiness";
import { Route, Routes } from "react-router-dom";
import BusinessLayout from "../layout/Business/BusinessLayout";
import PropertyReviews from "../components/business_pages/PropertyReviews";
import GroupHomepage from "../components/business_pages/GroupHomepage";
import Page404 from "../components/other_pages/Page404";

import Layout from "../layout/Layout";
import Home from "../components/user_pages/Home";
import { AppContext } from "../context/AppContext";
import ListProperty from "../components/business_pages/listpage/ListProperty";
import DetailPage from "../components/user_pages/DetailPage";

function UserRouter() {
    const { user } = useContext(AppContext);
  
    return (
      <Routes>
        {/* User routes */}
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/registerbusiness"
          element={
            <ProtectedRouter redirectPath="/signin" isAllowed={user}>
              <RegisterBusiness />
            </ProtectedRouter>
          }
        />
  
        {/* Business routes */}
        <Route
          path="/business"
          element={
            <ProtectedRouter
              redirectPath="/registerbusiness"
              isAllowed={user && user.haveBusinessAccount}
            >
              <BusinessLayout />
            </ProtectedRouter>
          }
        >
          <Route path="listproperty" element={<ListProperty />} />
          <Route path="reviews" element={<PropertyReviews />} />
          <Route path="" element={<GroupHomepage />} />
        </Route>
  
        {/* Home route */}
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="rooms/:id" element={<DetailPage></DetailPage>} /> {/* Dynamic route */}

        </Route>
        <Route path="/*" element={<Page404></Page404>}></Route>

      </Routes>
    );
  }
  export default UserRouter;
