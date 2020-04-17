import React from 'react';
import {connect} from "react-redux";
import Button from "../components/Button";

const Cancel = props => {

    const handleCancel = e => {
        e.preventDefault();
        props.abort_controller.abort();
    };

    return (
        <Button onClick={handleCancel} disabled={!props.is_data_fetching}>Cancel</Button>
    )
};

export default connect(
    state => ({
        abort_controller: state.search.abort_controller,
        is_data_fetching: state.search.is_data_fetching,
    }),
)(Cancel);