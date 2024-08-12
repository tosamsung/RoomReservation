import { Route, Routes } from "react-router-dom";

import { useContext } from "react";
import { AppContext, AppProvider } from "../context/AppContext.js";

import { AdminProvider } from "../context/AdminContext.js";
import UserRouter from "./UserRouter.js";
import AdminRouter from "./AdminRouter.js";
// import Posts from "../components/admin_pages/posts.js";

function MyRouter() {
  const { user } = useContext(AppContext);
  return (
    <>
      <Routes>
        {/*---------------------------- admin---------------------------- */}
        <Route
          path="/admin/*"
          element={
            <AdminProvider>
              <AdminRouter />
            </AdminProvider>
          }
        />
        {/*---------------------------- user ---------------------------- */}
        <Route
          path="/*"
          element={
            <AppProvider>
              <UserRouter />
            </AppProvider>
          }
        />

      </Routes>
    </>
  );
}

export default MyRouter;
