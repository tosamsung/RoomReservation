import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./component/pages/Home";
import Signin from "./component/pages/Signin.js";
import Signup from "./component/pages/Signup.js";
import BusinessLayout from "./layout/Buseniss/BusinessLayout.js";

function MyRouter() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>}></Route>
        </Route>
        <Route
          path="/business"
          element={<BusinessLayout></BusinessLayout>}
        ></Route>
      </Routes>
    </>
  );
}

export default MyRouter;
