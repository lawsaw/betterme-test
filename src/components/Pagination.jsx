import React from 'react';
import classes from '../styles/Pagination.module.scss';
import Button from './Button';

const Pagination = props => {
    return (
        <div className={classes.pagination}>
            {
                Array.from({length: props.pages}, (item, index) => {
                    const page = index+1;
                    const is_current_page = props.current_page === page;
                    return (
                        <Button
                            key={page}
                            is_active={is_current_page}
                            onClick={props.onClick(page)}
                            disabled={props.is_disabled || is_current_page}
                        >{page}</Button>
                    )
                })
            }
        </div>
    )
};

export default Pagination;