import { useSelector } from "react-redux";

export default function useAuth() {
  const token = useSelector((state: any) => state.auth.token);

  const isLoggedIn = !!token;

  const requireAuth = () => {
    if (!token) {
      window.location.href = "/login";
      return false;
    }
    return true;
  };

  return { token, isLoggedIn, requireAuth };
}