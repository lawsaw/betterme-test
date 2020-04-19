import {getRepos} from "../api/api";
import {SEARCH_RESULT_LIMIT} from '../helpers/constants';

const TOGGLE_IS_FETCHING_DATA = 'TOGGLE_IS_FETCHING_DATA';
const ADD_LOG = 'ADD_LOG';
const ADD_CACHE = 'ADD_CACHE';
const UPDATE_QUERY_DATA = 'UPDATE_QUERY_DATA';

let initial_state = {
    is_data_fetching: false,
    log: [],
    cache: {},
    query: {
        request: '',
        page: 1,
        query_key: '',
        abort_controller: null,
    },
};

const searchReducer = (state = initial_state, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING_DATA:
            return {
                ...state,
                is_data_fetching: action.status,
            };
        case ADD_LOG:
            return {
                ...state,
                log: [
                    {message: action.message, type: action.message_type},
                    ...state.log,
                ],
            };
        case ADD_CACHE:
            return {
                ...state,
                cache: {
                    ...state.cache,
                    ...action.cache,
                },
            };
        case UPDATE_QUERY_DATA:
            return {
                ...state,
                query: {
                    ...state.query,
                    ...action.payload,
                }
            };
        default:
            return state;
    }
};

export const toggleIsFetchingData = status => ({type: TOGGLE_IS_FETCHING_DATA, status});
export const addLog = (message, message_type) => ({type: ADD_LOG, message, message_type});
export const addCache = cache => ({type: ADD_CACHE, cache});
export const updateQueryData = payload => ({type: UPDATE_QUERY_DATA, payload});

export const getSearchResults = (page = 1) => (dispatch, getState) => {
    const {search: {query: {request}, cache}} = getState();
    const query_string = Object.values({request, page}).join('/');
    if (query_string in cache) {
        dispatch(updateQueryData({page, query_key: query_string}));
        dispatch(addLog(`query retrieved from cache: ${query_string}`, 'success'));
    } else {
        const abort_controller = new AbortController();
        dispatch(toggleIsFetchingData(true));
        dispatch(updateQueryData({abort_controller}));
        getRepos(request, page, abort_controller)
            .then(response => {
                const data = response.items.map(item => ({
                    id: item.id,
                    title: item.full_name,
                    url: item.html_url,
                    description: item.description,
                }));
                //TODO: Use `total` to not display pages from over 1000, because of the github's error message. Or use `response.total_count` do display it and get message showed.
                const total = response.total_count < SEARCH_RESULT_LIMIT ? response.total_count : SEARCH_RESULT_LIMIT;
                dispatch(toggleIsFetchingData(false));
                dispatch(addCache({
                    [query_string]: {data, total}
                }));
                dispatch(updateQueryData({page, query_key: query_string}));
                dispatch(addLog(`query added to cache: ${query_string}`, 'success'));
            })
            .catch(e => {
                dispatch(toggleIsFetchingData(false));
                dispatch(addLog(e.message, 'error'));
            })
    }

};

export default searchReducer;