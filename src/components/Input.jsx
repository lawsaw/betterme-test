import React from 'react';
import classes from '../styles/Input.module.scss';

const Input = props => {
    return (
        <div className={classes.input}>
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder} value={props.value}/>
        </div>
    )
};

export default Input;