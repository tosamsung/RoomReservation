import React, { useEffect, useState, createContext } from "react";
import UserAuthService from "../service/UserAuth";
import PageLoading from "../components/other_pages/PageLoading";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const validatedUser = await UserAuthService.validate();      
      setUser(validatedUser);
      setLoading(false);
    } catch (error) {
      setUser(null);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  if (loading) {
    return <PageLoading></PageLoading>;
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        fetchUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
