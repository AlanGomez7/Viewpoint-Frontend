import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Contents from "../components/Contents";
import AuthLayout from "../layouts/AuthLayout";
import Signin from "../components/Signin";
import Layout from "../layouts/Layout";
import StoryCard from "../components/Cards/StoryCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Contents />
      </Layout>
    ),
  },
  {
    path: "/signin",
    element: (
      <AuthLayout>
        <Signin />
      </AuthLayout>
    ),
  },
]);
