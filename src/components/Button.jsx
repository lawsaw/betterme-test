import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
    children: PropTypes.node,
    is_active: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;