import { AppRoutes, RoutePaths } from "@shared/config/router";
import { cls } from "@shared/lib/classNames";
import { FC } from "react";
import { AppLink } from "@shared/ui/AppLink";
import { useTranslation } from "react-i18next";
import style from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <header className={cls(style.navbar, {}, [className])}>
            <div className={style.links}>
                <AppLink to={RoutePaths[AppRoutes.MAIN]}>{t("Главная")}</AppLink>
                <AppLink to={RoutePaths[AppRoutes.ABOUT]}>{t("О нас")}</AppLink>
            </div>
        </header>
    );
};
