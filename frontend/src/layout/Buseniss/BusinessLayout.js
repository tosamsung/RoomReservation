import { Outlet } from "react-router-dom";
import Footer from "../Buseniss/Footer";
import Header from "../Buseniss/Header";

function BusinessLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default BusinessLayout;
