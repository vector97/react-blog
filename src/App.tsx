import { Suspense } from 'react';
import './styles/index.scss'
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./pages/Main/page.async";
import { AboutPageAsync } from "./pages/About/page.async";
import { useTheme } from "./theme/useTheme";
import { cls } from "./helpers/classNames/cls";

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={cls('app', {}, [theme])}>
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
