import React from 'react';
import {connect} from "react-redux";
import {compose} from 'redux';
import PaginationComponent from "../components/Pagination";
import {ITEMS_PER_PAGE, SEARCH_RESULT_LIMIT} from "../helpers/constants";
import {withCache} from '../hoc/withCache';

const Pagination = props => {

    const handleClick = page => e => {
        e.preventDefault();
        props.changeQuery(page);
    };

    return (
        <PaginationComponent
            pages={props.pages}
            current_page={props.current_page}
            onClick={handleClick}
            is_disabled={props.is_data_fetching}
        />
    )
};

export default compose(
    connect(
        state => {
            const total = state.search.total < SEARCH_RESULT_LIMIT ? state.search.total : SEARCH_RESULT_LIMIT;
            //TODO: Use `total` to not display pages from over 1000, because of the github's error message. Or use `state.search.total` do display it and get message showed.
            const pagination_buttons_count = Math.ceil(total / ITEMS_PER_PAGE);
            return ({
                pages: pagination_buttons_count,
                current_page: state.search.current_page,
                is_data_fetching: state.search.is_data_fetching,
            })
        }
    ),
    withCache
)(Pagination);

