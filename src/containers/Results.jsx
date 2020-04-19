import React from 'react';
import {connect} from 'react-redux';
import List from '../components/List';
import Loader from '../components/Loader';

const Results = props => {
    const data = props.data;
    return props.is_data_fetching ? <Loader/> : data && data.length ? <List data={data}/> : props.is_data_loaded ? 'There is no results' : ''
};

export default connect(
    state => ({
        data: (state.search.cache[state.search.query.query_key] || {}).data,
        is_data_loaded: !!state.search.query.query_key,
        is_data_fetching: state.search.is_data_fetching,
    })
)(Results);