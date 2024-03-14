import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Contents from "../components/Contents";
import AuthLayout from "../layouts/AuthLayout";
import Signin from "../components/Signin";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Contents />
          </MainLayout>
        }
      />
      <Route
        path="/signin"
        element={
          <AuthLayout>
            <Signin />
          </AuthLayout>
        }
      />
    </Routes>
  );
}
