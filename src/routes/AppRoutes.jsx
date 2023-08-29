import React from "react";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import BodyComponent from "../components/BodyComponent";
import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "../pages/Login";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import getToken from "../utils/getToken";
import PostPage from "../pages/Post/PostPage";
import UsersPage from "../pages/Users/UsersPage";

const AppRoutes = () => {
  const token = getToken();

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
      path: NAVIGATION_ROUTES.CLIENT,
      element: token ? (
        <Layout>
          <BodyComponent />
        </Layout>
      ) : (
        <Navigate to={NAVIGATION_ROUTES.LOGIN} />
      ),
    },
    {
      path: NAVIGATION_ROUTES.POSTS,
      element: token ? (
        <Layout>
          <PostPage />
        </Layout>
      ) : (
        <Navigate to={NAVIGATION_ROUTES.LOGIN} />
      ),
    },
    {
      path: NAVIGATION_ROUTES.USERS,
      element: token ? (
        <Layout>
          <UsersPage />
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
