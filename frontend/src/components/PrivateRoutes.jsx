import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const { userDetails } = useContext(AuthContext);
  return userDetails !== "null" && userDetails ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoutes;
