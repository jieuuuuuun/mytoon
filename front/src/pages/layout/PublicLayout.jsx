import React from "react";
import useAuthStore from "../../store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const PublicLayout = () => {
  const { member } = useAuthStore();

  if(member) {
    return <Navigate to="/" replace />
  }

  return <Outlet />;
};

export default PublicLayout;
