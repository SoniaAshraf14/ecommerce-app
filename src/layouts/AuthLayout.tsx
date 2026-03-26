// src/layouts/AuthLayout.jsx
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
