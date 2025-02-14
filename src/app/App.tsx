import {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "@shared/config/theme";
import {cls} from "@shared/lib/classNames";
import {MainPage} from "@pages/main";
import {AboutPage} from "@pages/about";

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={cls('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />}  />
                    <Route path={'/about'} element={<AboutPage />}  />
                </Routes>
            </Suspense>
        </div>
    );
};
