import React from 'react';
import classes from '../styles/List.module.scss';

const Item = props => {
    return (
        <div className={classes.list_item}>
            <div className={classes.list_item_title}>{props.title}</div>
            <div className={classes.list_item_stars}>{props.stars}</div>
        </div>
    )
};

const List = props => {
    return (
        <div className={classes.list}>
            {
                props.data.map((item, index) => (
                    <Item key={index} title={item.title} stars={item.stars}/>
                ))
            }
        </div>
    )
};

export default List;