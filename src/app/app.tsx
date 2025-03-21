import './styles/index.scss'
import {useTheme} from "@shared/config/theme";
import {cls} from "@shared/lib/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "@widgets/Navbar";

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={cls('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};
