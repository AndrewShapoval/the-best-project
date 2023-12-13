import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        variant,
        square,
        size = ButtonSize.M,
        children,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = { [cls.square]: square };

    const additionalClass = [className, cls[variant], cls[size]];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, additionalClass)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
