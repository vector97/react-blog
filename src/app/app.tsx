import "./styles/index.scss";
import { useTheme } from "@shared/config/theme";
import { cls } from "@shared/lib/classNames";
import { Navbar } from "@widgets/Navbar";
import { Sidebar } from "@widgets/Sidebar";
import { AppRouter } from "./providers/router";

export function App() {
    const { theme } = useTheme();

    return (
        <div className={cls("app", {}, [theme])}>
            <Navbar />
            <div className="layout">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
}
