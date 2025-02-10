import { Suspense } from 'react';
import './styles/index.scss'
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./pages/Main/page.async";
import { AboutPageAsync } from "./pages/About/page.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />}  />
                    <Route path={'/about'} element={<AboutPageAsync />}  />
                </Routes>
            </Suspense>
        </div>
    );
};
