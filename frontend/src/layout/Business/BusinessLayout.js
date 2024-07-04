import { Outlet } from "react-router-dom";

import "../../css/style.css"
import BusinessHeader from "./BusinessHeader";
import BusinessFooter from "./BusinessFooter";
function BusinessLayout() {
  return (
    <>
    <BusinessHeader></BusinessHeader>
      <Outlet/>
      <BusinessFooter></BusinessFooter>
    </>
  );
}

export default BusinessLayout;
