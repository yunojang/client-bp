import { lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";

const UserRoute = lazy(() => import("@/features/users"));
// const Dashboard = lazy(() => import("@/features/users"));

// const pahts = {
//     user: "/user/*",
// };

const App = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export const protectedRoutes: RouteObject[] = [
    {
        path: "/app",
        element: <UserRoute />,
        // children: [{}],
    },
];