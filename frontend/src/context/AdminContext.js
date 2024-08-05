import React, { useEffect, useState, createContext } from "react";
import PageLoading from "../components/other_pages/PageLoading";
import AdminAuthService from "../service/AdminAuthService";
export const AdminContext = createContext({});
export const AdminProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState();

  const fetchAdmin = async () => {
    setLoading(true);
    try {
      const result = await AdminAuthService.validate();
      setAdmin(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAdmin();
  }, []);
  if (loading) {
    return <PageLoading></PageLoading>;
  }

  return (
    <AdminContext.Provider
      value={{
        admin,
        setAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
