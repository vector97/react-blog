import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { routerConfig } from "../config";

export const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {
                Object.values(routerConfig).map(({ element, ...routeProps }) => (
                    <Route
                        key={routeProps.path}
                        element={(
                            <main className="page">{element}</main>
                        )}
                        {...routeProps}
                    />
                ))
            }
        </Routes>
    </Suspense>
);
