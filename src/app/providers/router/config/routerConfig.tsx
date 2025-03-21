import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/Main";
import {AboutPage} from "@pages/About";
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