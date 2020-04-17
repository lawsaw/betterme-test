import React from 'react';
import {connect} from 'react-redux';
import List from '../components/List';

const Results = props => {
    const data = props.search_results && props.search_results.items.map(item => ({
        title: item.full_name,
        url: item.html_url,
        description: item.description,
    }));
    return data && <List data={data} />
};

export default connect(
    state => ({
        search_results: state.search.search_results,
    })
)(Results);