import React from 'react';
import {connect} from 'react-redux';
import List from '../components/List';
import Loader from '../components/Loader';

const Results = props => {
    const data = props.search_results;
    return props.is_data_fetching ? <Loader/> : data && <List data={data}/>
};

export default connect(
    state => ({
        search_results: state.search.search_results,
        is_data_fetching: state.search.is_data_fetching,
    })
)(Results);