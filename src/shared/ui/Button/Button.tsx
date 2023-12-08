import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum variantButton {
    // eslint-disable-next-line no-unused-vars
    CLEAR = 'clear',
    OUTLINE = 'outline',

}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    variant?: variantButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        variant,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
