import React from 'react';
import {connect} from "react-redux";
import {setErrorMessage} from '../redux/search-reducer';
import Message from "../containers/Message";

const Log = props => {

    const closeMessage = () => {
        props.setErrorMessage(null);
    };

    return props.error_message && (
        <Message
            type="error"
            onClose={closeMessage}
        >
            {props.error_message}
        </Message>
    )
};

export default connect(
    state => ({
        error_message: state.search.error_message,
    }),
    {setErrorMessage}
)(Log);