import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = ({ auth }) => {
  return auth ? <Outlet /> : <Navigate to="/" />;
};
