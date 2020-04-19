import React from 'react';
import cx from 'classnames';
import classes from '../styles/Message.module.scss';

const Message = ({children, className, type = "info", ...props}) => {
    return (
        <div
            {...props}
            className={cx(classes.message, className, classes[`message_${type}`])}
        >
            {children}
        </div>
    )
};

export default Message;