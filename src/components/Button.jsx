import React from 'react';
import classes from '../styles/Button.module.scss';

const Button = ({children, className, is_active, ...props}) => {
    return (
        <button
            {...props}
            className={[classes.button, className || '', is_active ? classes.active : ''].join(' ')}
        >{children}</button>
    )
};

export default Button;