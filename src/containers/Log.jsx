import React from 'react';
import {connect} from "react-redux";
import LogComponent from '../components/Log';

const Log = props => {

    return (
        <LogComponent
            data={props.log}
        />
    )
};

export default connect(
    state => ({
        log: state.search.log,
    }),
)(Log);