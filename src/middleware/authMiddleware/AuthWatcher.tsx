import { useEffect} from "react";
import type { ReactNode } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/login/loginSlice";
import { persistor } from "../../app/store";
import { getTokenExpiry } from "../../utils";

interface AuthWatcherProps {
  children: ReactNode;
}

const AuthWatcher = ({ children }: AuthWatcherProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state: any) => state.auth);

useEffect(() => {
  console.log("AuthWatcher token: ", token);
  if (!token) {
    navigate("/");
    return;
  }

  const tokenExpiry = token ? getTokenExpiry(token) : null;

  if (tokenExpiry) {
    const now = Date.now();

    if (tokenExpiry < now) {
      dispatch(logout());
      persistor.purge();
      navigate("/");
    } else {
      const timeout = setTimeout(() => {
        dispatch(logout());
        persistor.purge();
        navigate("/");
      }, tokenExpiry - now);

      return () => clearTimeout(timeout);
    }
  }
}, [token, dispatch, navigate]);

  return <>{children}</>;
};

export default AuthWatcher;