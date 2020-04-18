import React from 'react';
import classes from '../styles/Input.module.scss';
import Button from '../components/Button';

const Input = props => {
    return (
        <form
            onSubmit={props.handleSubmit}
            className={classes.input}
        >
            <input
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <Button disabled={props.is_disabled}>
                Search
            </Button>
        </form>
    )
};

export default Input;