import { cls } from "@shared/lib/classNames";
import { FC } from "react";
import { Theme, useTheme } from "@shared/config/theme";
import DarkThemeIcon from "@shared/assets/icons/moon.svg";
import LightThemeIcon from "@shared/assets/icons/sun.svg";
import { Button } from "@shared/ui/Button";
import style from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={cls(style.themeSwitcher, {}, [className])}
            variant="clear"
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
        </Button>
    );
};
