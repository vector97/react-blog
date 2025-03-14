import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routerConfig} from "../config";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.values(routerConfig).map((routeProps) => (
                        <Route key={routeProps.path} {...routeProps}  />
                    ))
                }
            </Routes>
        </Suspense>
    );
};
