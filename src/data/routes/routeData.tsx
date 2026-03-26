import Login from "../../pages/login/Login";
import Registeration from "../../pages/registeration/Registeration";
import HomePage from "../../pages/home/Home";
import type { AppRoute } from "../../routes/routeTypes";

export const publicRoutes: AppRoute[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registeration",
    element: <Registeration />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  
];

export const protectedRoutes: AppRoute[] = [

  // {
  //   path: "/review",
  //   element: <ReviewPage />,
  // },
];