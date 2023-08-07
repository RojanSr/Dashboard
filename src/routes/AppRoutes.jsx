import React, { useEffect, useState } from "react";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import BodyComponent from "../components/BodyComponent";
import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "../pages/Login";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import getToken from "../utils/getToken";
import delToken from "../utils/delToken";

const AppRoutes = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(getToken());
  }, [getToken()]);

  const routes = [
    {
      path: NAVIGATION_ROUTES.LOGIN,
      element: token ? (
        <Navigate to={NAVIGATION_ROUTES.DASHBOARD} />
      ) : (
        <LoginPage>
          <Login />
        </LoginPage>
      ),
    },
    {
      path: NAVIGATION_ROUTES.SIGNUP,
      element: token ? (
        <Navigate to={NAVIGATION_ROUTES.DASHBOARD} />
      ) : (
        <LoginPage>
          <Signup />
        </LoginPage>
      ),
    },
    {
      path: NAVIGATION_ROUTES.DASHBOARD,
      element: token ? (
        <Layout>
          <Dashboard />
        </Layout>
      ) : (
        <Navigate to={NAVIGATION_ROUTES.LOGIN} />
      ),
    },
    {
      path: NAVIGATION_ROUTES.USERS,
      element: token ? (
        <Layout>
          <BodyComponent />
        </Layout>
      ) : (
        <Navigate to={NAVIGATION_ROUTES.LOGIN} />
      ),
    },
  ];

  const route = useRoutes(routes);
  return route;
};

export default AppRoutes;
