import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { logout } from "../../features/auth/login/loginSlice";
import { persistor } from "../../app/store";

interface LogoutButtonProps {
  className?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ className = "" }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    localStorage.clear()
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className={`px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-[#020716] transition ${className}`}
    >
      Logout
    </button>
  );
};

export default LogoutButton;