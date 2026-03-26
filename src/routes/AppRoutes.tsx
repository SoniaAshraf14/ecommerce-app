import { Routes, Route, Navigate } from "react-router-dom";
// import type { ReactElement } from "react";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import AuthWatcher from "../middleware/authMiddleware/AuthWatcher";

import { publicRoutes, protectedRoutes } from "../data/routes/routeData";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute>
            <AuthWatcher>
              <MainLayout />
            </AuthWatcher>
          </ProtectedRoute>
        }
      >
        {protectedRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;