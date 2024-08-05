import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./router/MyRouter";
import { AppProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
 />
    <AppProvider>
      <BrowserRouter>
        <MyRouter></MyRouter>
      </BrowserRouter>
      
    </AppProvider>
<ToastContainer />

  </React.StrictMode>
);
