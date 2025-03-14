import {RouteProps} from "react-router-dom";
import {MainPage} from "@pages/main";
import {AboutPage} from "@pages/about";
import {AppRoutes, RoutePaths} from "@shared/config/router";


export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths[AppRoutes.MAIN],
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths[AppRoutes.ABOUT],
        element: <AboutPage />
    }
}