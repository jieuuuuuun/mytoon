import React from "react";
import { Navigate, Outlet} from "react-router-dom";

import useAuthStore from "../../store/authStore";

const AuthLayout = () => {
  const member = useAuthStore((state) => state.member);

  // 랜더안되게 막는다
  if (!member) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default AuthLayout;
