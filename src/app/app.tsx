import './styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme} from "@shared/config/theme";
import {cls} from "@shared/lib/classNames";
import {AppRouter} from "./providers/router";
import {AppRoutes, RoutePaths} from "@shared/config/router";

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={cls('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>

            <Link to={RoutePaths[AppRoutes.MAIN]}>Главная</Link>
            <Link to={RoutePaths[AppRoutes.ABOUT]}>О нас</Link>

            <AppRouter />
        </div>
    );
};
