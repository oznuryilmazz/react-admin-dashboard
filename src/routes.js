import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import DashboardApp from "./pages/dashboard/DashboardApp";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Page404 from "./pages/page-404/Page404";
import User from "./pages/user/User";
import EcommerceShop from "./pages/products/Product";
import Blog from "./pages/blog/Blog";

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "app", element: <DashboardApp /> },
        { path: "user", element: <User /> },
        { path: "products", element: <EcommerceShop /> },
        { path: "blog", element: <Blog /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard/app" /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
