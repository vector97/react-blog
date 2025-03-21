import {cls} from "shared/lib/classNames";
import style from './AppLink.module.scss';
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

type AppLinkVariant = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, to, children, variant = 'primary', ...rest } = props;

    return (
        <Link
            className={cls(style.AppLink, {}, [className, style[variant]])}
            to={to}
            {...rest}
        >
            {children}
        </Link>
    );
};
