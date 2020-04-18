import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import {getSearchResults, setSearchResults, updateCurrentPage, addLog, toggleIsFetchingData} from '../redux/search-reducer';
import CachedSearch from '../helpers/CachedSearch';

export const withCache = (Component) => {

    const CachedComponent = props => {
        const cachedSearch = useMemo(() => new CachedSearch(props.getSearchResults, props.setSearchResults, ({page}) => { props.updateCurrentPage(page); props.toggleIsFetchingData(false) }, props.addLog), []);
        const handleRequest = (page = props.current_page) => {
            cachedSearch.changeQuery({
                search_request: props.search_request,
                page
            });
        }
        return <Component {...props} changeQuery={handleRequest}/>
    }

    return connect(
        state => ({
            search_request: state.search.search_request,
            current_page: state.search.current_page,
        }),
        dispatch => ({
            updateCurrentPage: page => (dispatch(updateCurrentPage(page))),
            getSearchResults: query => (dispatch(getSearchResults(query))),
            setSearchResults: response => (dispatch(setSearchResults(response))),
            addLog: (message, message_type) => (dispatch(addLog(message, message_type))),
            toggleIsFetchingData: status => (dispatch(toggleIsFetchingData(status))),
        }))(CachedComponent);

};