import React from 'react';
import classes from '../styles/Message.module.scss';

const Message = ({children, className, type = "info", ...props}) => {
    return (
        <div
            {...props}
            className={[classes.message, className || '', classes[`message_${type}`]].join(' ')}
        >
            {children}
        </div>
    )
};

export default Message;