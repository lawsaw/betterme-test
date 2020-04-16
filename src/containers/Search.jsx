import React from 'react';
import {connect} from 'react-redux';
import Input from '../components/Input';
import {updateSearchRequest} from '../redux/search-reducer';

const Search = props => {
    return (
        <Input
            value={props.search_request}
            onChange={props.updateSearchRequest}
            placeholder="Search repo"
            label="Search repo"
        />
    )
};

export default connect(
    state => ({
        search_request: state.search.search_request,
    }),
    dispatch => ({
        updateSearchRequest: e => (dispatch(updateSearchRequest(e.target.value))),
    })
)(Search);