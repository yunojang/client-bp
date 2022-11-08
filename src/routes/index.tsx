import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { useAuth } from "@/features/auth/api";

import { commonRoute } from "@/features/common";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

interface AppRouteProps {}

const AppRoute: React.FC<AppRouteProps> = () => {
    const { user } = useAuth();

    // auth 확인 후 라우터 결정
    // login 후 라우터 안바뀌는 이슈
    const currentRoutes = useMemo(
        () => (user ? protectedRoutes : publicRoutes),
        [user]
    );

    return useRoutes([...currentRoutes, ...commonRoute]);
};

export default AppRoute;
