import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/Log.module.scss';
import Message from "./Message";

const Log = props => {
    return props.data.map(({message, type}, index) => (
        <Message
            key={index}
            className={classes.log_item}
            type={type}
        >
            {message}
        </Message>
    ))
};

Log.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
};

export default Log;