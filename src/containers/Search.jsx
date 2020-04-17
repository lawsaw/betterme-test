import React from 'react';
import {connect} from 'react-redux';
import Input from '../components/Input';
import {updateSearchRequest, getSearchResults} from '../redux/search-reducer';

const Search = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.getSearchResults(props.search_request);
    };

    return (
        <Input
            value={props.search_request}
            onChange={props.updateSearchRequest}
            placeholder="Search repo"
            is_disabled={props.is_data_fetching}
            handleSubmit={handleSubmit}
        />
    )
};

export default connect(
    state => ({
        search_request: state.search.search_request,
        is_data_fetching: state.search.is_data_fetching,
    }),
    dispatch => ({
        updateSearchRequest: e => (dispatch(updateSearchRequest(e.target.value))),
        getSearchResults: () => (dispatch(getSearchResults())),
    })
)(Search);