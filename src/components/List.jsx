import React from 'react';
import classes from '../styles/List.module.scss';

const Item = props => {
    return (
        <div className={classes.list_item}>
            <div className={classes.list_item_title}>
                <a
                    href={props.url}
                    target="_blank"
                >
                    {props.title}
                </a>
            </div>
            <div className={classes.list_item_description}>
                {props.description}
            </div>
        </div>
    )
};

const List = props => {
    return (
        <div className={classes.list}>
            {
                props.data.map(item => (
                    <Item
                        key={item.id}
                        title={item.title}
                        url={item.url}
                        description={item.description}
                    />
                ))
            }
        </div>
    )
};

export default List;