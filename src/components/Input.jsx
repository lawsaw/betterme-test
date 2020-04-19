import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/Input.module.scss';
import Button from '../components/Button';

const Input = props => {
    return (
        <form
            onSubmit={props.handleSubmit}
            className={classes.input}
        >
            <div className={classes.field}>
                <input
                    type="text"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
            <Button disabled={props.is_disabled}>
                Search
            </Button>
        </form>
    )
};

Input.propTypes = {
    handleSubmit: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    is_disabled: PropTypes.bool,
};

export default Input;