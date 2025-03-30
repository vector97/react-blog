import { cls } from "@shared/lib/classNames";
import { FC, useState } from "react";
import { ThemeSwitcher } from "@features/ThemeSwitcher";
import { LanguageSwitcher } from "@features/LanguageSwitcher";
import { Button } from "@shared/ui/Button";
import style from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;

    const [isCollapsed, setIsCollapsed] = useState(false);

    const onToggleHandler = () => setIsCollapsed((prev) => !prev);

    return (
        <div className={cls(style.sidebar, { [style.collapsed]: isCollapsed }, [className])}>
            <Button onClick={onToggleHandler}>{isCollapsed ? "+" : "-"}</Button>

            <div className={style.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
