import {getRepos} from "../api/api";

const UPDATE_SEARCH_REQUEST = 'UPDATE_SEARCH_REQUEST';
const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
const TOGGLE_IS_FETCHING_DATA = 'TOGGLE_IS_FETCHING_DATA';

let initial_state = {
    search_request: '',
    is_data_fetching: false,
    search_results: null,
};

const searchReducer = (state = initial_state, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_REQUEST:
            return {
                ...state,
                search_request: action.search_request,
            };
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                search_results: action.data,
                search_request: '',
            };
        case TOGGLE_IS_FETCHING_DATA:
            return {
                ...state,
                is_data_fetching: action.status
            };
        default:
            return state;
    }
};

export const updateSearchRequest = search_request => ({type: UPDATE_SEARCH_REQUEST, search_request});
export const setSearchResults = data => ({type: SET_SEARCH_RESULTS, data});
export const toggleIsFetchingData = status => ({type: TOGGLE_IS_FETCHING_DATA, status});

export const getSearchResults = (search_request, page = 1) => dispatch => {
    dispatch(toggleIsFetchingData(true));
    getRepos(search_request, page)
        .then(data => {
            dispatch(setSearchResults(data));
            dispatch(toggleIsFetchingData(false));
        });
};

export default searchReducer;