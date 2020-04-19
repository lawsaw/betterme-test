import React from 'react';
import cx from 'classnames';
import classes from '../styles/Button.module.scss';

const Button = ({children, className, is_active, ...props}) => {
    return (
        <button
            {...props}
            className={cx(classes.button, className, is_active && classes.active)}
        >
            {children}
        </button>
    )
};

export default Button;