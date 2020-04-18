import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Input from '../components/Input';
import {updateSearchRequest} from '../redux/search-reducer';
import {withCache} from '../hoc/withCache';

const Search = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.changeQuery();
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

export default compose(
    connect(
        state => ({
            search_request: state.search.search_request,
            is_data_fetching: state.search.is_data_fetching,
        }),
        dispatch => ({
            updateSearchRequest: e => (dispatch(updateSearchRequest(e.target.value))),
        })
    ),
    withCache
)(Search);