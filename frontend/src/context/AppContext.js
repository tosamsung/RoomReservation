import React, { useEffect, useState, createContext } from "react";
import UserAuthService from "../service/UserAuth";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const validateToken = async () => {
    const response = await UserAuthService.validate();
    return response;
  };
  useEffect(() => {
    const fetchUser = async () => {
      const validatedUser = await validateToken();
      setUser(validatedUser);
    };

    fetchUser();
  }, []);
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
