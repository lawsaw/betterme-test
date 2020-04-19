import React from 'react';
import {connect} from "react-redux";
import PaginationComponent from "../components/Pagination";
import {ITEMS_PER_PAGE} from "../helpers/constants";
import {getSearchResults} from "../redux/search-reducer";

const Pagination = props => {

    const handleClick = page => e => {
        e.preventDefault();
        props.getSearchResults(page);
    };

    return props.pages_count > 0 ? (
        <PaginationComponent
            pages={props.pages_count}
            current_page={props.current_page}
            onClick={handleClick}
            is_disabled={props.is_data_fetching}
        />
    ) : null
};

export default connect(
    state => {
        const total = Object.keys(state.search.cache).length ? (state.search.cache[state.search.query.query_key] || {}).total : 0;
        const pagination_buttons_count = Math.ceil(total / ITEMS_PER_PAGE);
        return ({
            pages_count: pagination_buttons_count,
            current_page: state.search.query.page,
            is_data_fetching: state.search.is_data_fetching,
        })
    },
    {getSearchResults}
)(Pagination);

