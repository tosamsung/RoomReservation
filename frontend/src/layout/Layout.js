import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
    return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
    );
  }
  
  export default Layout;