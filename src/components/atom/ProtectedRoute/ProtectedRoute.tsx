/** @format */

import React from "react";
import { Navigate } from "react-router";

import useAuthStore from "store/auth.store";
import { appRoutes } from "utils/constants";

interface Props {
  children: JSX.Element;
}
const ProtectedRoute: React.FC<Props> = ({ children }) => {
  // Store
  const { userData } = useAuthStore();

  if (!userData?.email) {
    return <Navigate to={appRoutes.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;
