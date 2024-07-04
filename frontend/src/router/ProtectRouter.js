import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = ({
    isAllowed,
    redirectPath = '/landing',
    children,
  }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };
  export default ProtectedRouter