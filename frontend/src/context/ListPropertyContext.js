import React, { useEffect, useState, createContext } from "react";

export const AppContext = createContext({});
export const PropertyProvider = ({ children }) => {


  return (
    <AppContext.Provider
      value={{
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
