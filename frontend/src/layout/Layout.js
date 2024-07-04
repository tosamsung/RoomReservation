import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "../css/style.css"
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
