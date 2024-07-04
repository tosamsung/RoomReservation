import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./router/MyRouter";
import { AppProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <MyRouter></MyRouter>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
