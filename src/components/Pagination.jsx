import React from 'react';
import classes from '../styles/Pagination.module.scss';

const Pagination = props => {
    return (
        <div className={classes.pagination}>
            {
                Array.from({length: props.pages}, (item, index) => {
                    const page = index+1;
                    return (
                        <a key={page} href={page}>{page}</a>
                    )
                })
            }
        </div>
    )
};

export default Pagination;