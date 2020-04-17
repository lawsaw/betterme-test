import { getRepos } from "../api/api";

const UPDATE_SEARCH_REQUEST = 'UPDATE_SEARCH_REQUEST';
const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
const SET_PROGRESS = 'SET_PROGRESS';

let initial_state = {
    search_request: '',
    is_in_progress: false,
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
        case SET_PROGRESS:
            return {
                ...state,
                is_in_progress: action.status
            };
        default:
            return state;
    }
};

export const updateSearchRequest = search_request => ({type: UPDATE_SEARCH_REQUEST, search_request});
export const setSearchResults = data => ({type: SET_SEARCH_RESULTS, data});
export const setProgress = status => ({type: SET_PROGRESS, status});

export const getSearchResults = (search_request, page=1) => dispatch => {
    dispatch(setProgress(true));
    getRepos(search_request, page)
        .then(data => {
            dispatch(setSearchResults(data));
            dispatch(setProgress(false));
        });
};

export default searchReducer;