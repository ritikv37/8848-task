import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainPage from "./components/component/MainPage";
import List from "./components/pages/list/List"
import User from "./components/pages/user/User";
import Login from "./components/pages/Login";
import { ErrorPage } from "./components/pages/Error/ErrorPage ";



export default function Routes() {
    const token = localStorage.getItem("token")
    const router = useRoutes([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/login",
            element: <Login />
        },
        {

            path: "/dashboard",
            element: token ? <MainPage /> : <Navigate to="/login" />,
            children: [
                {
                    path: "/dashboard/list",
                    element: <List />,
                    index: true
                },
                {
                    path: "/dashboard/user",
                    element: <User />
                }
            ]
        },
        {
            path: "*",
            element: <Navigate to="/404" />
        },
        {
            path: "404",
            element: <ErrorPage />
        }


    ]);
    return router;
}
