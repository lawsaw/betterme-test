import React from 'react';
import {connect} from 'react-redux';
import Input from '../components/Input';
import {getSearchResults, updateQueryData} from '../redux/search-reducer';

const Search = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.getSearchResults();
    };

    return (
        <Input
            value={props.request}
            onChange={props.updateQueryData}
            placeholder="Search repo"
            is_disabled={props.is_data_fetching}
            handleSubmit={handleSubmit}
        />
    )
};

export default connect(
    state => ({
        request: state.search.query.request,
        is_data_fetching: state.search.is_data_fetching,
    }),
    dispatch => ({
        updateQueryData: e => (dispatch(updateQueryData({request: e.target.value}))),
        getSearchResults: query => (dispatch(getSearchResults(query))),
    })
)(Search);