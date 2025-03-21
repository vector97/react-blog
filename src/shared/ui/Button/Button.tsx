import {cls} from "@shared/lib/classNames";
import style from "./Button.module.scss";
import {ButtonHTMLAttributes, FC} from "react";

type ButtonVariant = 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, variant = 'clear', ...rest} = props;

    return (
        <button
            className={cls(style.button, {}, [className, style[variant]])}
            {...rest}
        >
            {children}
        </button>
    );
};
