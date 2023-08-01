import React from "react";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import BodyComponent from "../components/BodyComponent";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => {
  const routes = [
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
