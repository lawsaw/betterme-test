import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/List.module.scss';

const Item = props => {
    return (
        <div className={classes.list_item}>
            <div className={classes.list_item_title}>
                <a
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
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

//TODO: I know that it's not important because of List rule
Item.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

List.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ])
        )
    ),
};

export default List;