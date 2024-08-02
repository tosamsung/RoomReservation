import React, { useEffect, useState, createContext } from "react";
import UserAuthService from "../service/UserAuth";
import PageLoading from "../components/other_pages/PageLoading";

export const AdminContext = createContext({});
export const AdminProvider = ({ children }) => {
  
  if (loading) {
    return <PageLoading></PageLoading>;
  }

  return (
    <AdminContext.Provider
      value={{
        user,
        setUser,
        fetchUser
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
