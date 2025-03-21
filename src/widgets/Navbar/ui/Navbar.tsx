import {AppRoutes, RoutePaths} from "@shared/config/router";
import {cls} from "@shared/lib/classNames";
import style from './Navbar.module.scss';
import {FC} from "react";
import {AppLink} from "@shared/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <header className={cls(style.navbar, {}, [className])}>
            <div className={style.links}>
                <AppLink to={RoutePaths[AppRoutes.MAIN]}>Главная</AppLink>
                <AppLink to={RoutePaths[AppRoutes.ABOUT]}>О нас</AppLink>
            </div>
        </header>
    );
};
