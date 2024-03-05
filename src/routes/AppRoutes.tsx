import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Contents from "../components/Contents"

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Contents/>
          </MainLayout>
        }
      />
    </Routes>
  );
}

