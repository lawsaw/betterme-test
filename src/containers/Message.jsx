import React, {useEffect} from 'react';
import MessageComponent from "../components/Message";

const Message = ({onClose, ...props}) => {

    useEffect(() => {
        setTimeout(() => {
            onClose();
        }, 3000);
    })

    return (
        <MessageComponent {...props} />
    )
};

export default Message;