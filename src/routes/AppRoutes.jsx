import React from "react";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import BodyComponent from "../components/BodyComponent";
import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/Login";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import HookForm from "../components/HookForm";

const AppRoutes = () => {
  const routes = [
    {
      path: NAVIGATION_ROUTES.LOGIN,
      element: (
        <LoginPage>
          <Login />
        </LoginPage>
      ),
    },
    {
      path: "/hookform",
      element: <HookForm />,
    },
    {
      path: NAVIGATION_ROUTES.SIGNUP,
      element: (
        <LoginPage>
          <Signup />
        </LoginPage>
      ),
    },
    {
      path: NAVIGATION_ROUTES.DASHBOARD,
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      ),
    },
    {
      path: NAVIGATION_ROUTES.USERS,
      element: (
        <Layout>
          <BodyComponent />
        </Layout>
      ),
    },
  ];

  const route = useRoutes(routes);

  return route;
};

export default AppRoutes;
