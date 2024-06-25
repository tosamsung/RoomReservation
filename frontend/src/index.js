import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./MyRouter";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRouter></MyRouter>
    </BrowserRouter>
  </React.StrictMode>
);
