import './styles/index.scss'
import {useTheme} from "@shared/config/theme";
import {cls} from "@shared/lib/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "@widgets/Navbar";
import {Sidebar} from "@widgets/Sidebar";

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={cls('app', {}, [theme])}>
            <Navbar />
            <div className='layout'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
