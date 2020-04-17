import React from 'react';
import {connect} from 'react-redux';
import Input from '../components/Input';
import {updateSearchRequest, getSearchResults} from '../redux/search-reducer';

const Search = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.getSearchResults(props.search_request)();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                value={props.search_request}
                onChange={props.updateSearchRequest}
                placeholder="Search repo"
                label="Search repo"
            />
            <button disabled={props.is_in_progress}>Search</button>
        </form>
    )
};

export default connect(
    state => ({
        search_request: state.search.search_request,
        is_in_progress: state.search.is_in_progress,
    }),
    dispatch => ({
        updateSearchRequest: e => (dispatch(updateSearchRequest(e.target.value))),
        getSearchResults: search_request => () => (dispatch(getSearchResults(search_request))),
    })
)(Search);