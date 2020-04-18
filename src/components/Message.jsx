import React from 'react';
import classes from '../styles/Message.module.scss';

const Message = ({children, type = "info", ...props}) => {
    return (
        <div
            {...props}
            className={[classes.message, classes[`message_${type}`]].join(' ')}
        >
            {children}
        </div>
    )
};

export default Message;