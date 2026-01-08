import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "@/contexts/SessionProvider";

const ProtectedRoute: React.FC = () => {
  const { user, isLoading } = useSession();

  if (isLoading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
