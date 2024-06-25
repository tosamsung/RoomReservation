import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./component/pages/Home";


function MyRouter() {
    return (
    <>
    <Routes>
      <Route  path="/" element={<Layout></Layout>}>
      <Route  path="/" element={<Home></Home>}>
      
      </Route>
      </Route>
    </Routes>
    </>
    );
  }
  
  export default MyRouter;