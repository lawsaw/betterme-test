import {getRepos} from "../api/api";

const UPDATE_SEARCH_REQUEST = 'UPDATE_SEARCH_REQUEST';
const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
const TOGGLE_IS_FETCHING_DATA = 'TOGGLE_IS_FETCHING_DATA';
const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
const SET_ABORT_SIGNAL = 'SET_ABORT_SIGNAL';
const ADD_LOG = 'ADD_LOG';

let initial_state = {
    search_request: '',
    is_data_fetching: false,
    search_results: null,
    total: 0,
    current_page: 1,
    abort_controller: null,
    log: [],
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
                total: action.total,
            };
        case TOGGLE_IS_FETCHING_DATA:
            return {
                ...state,
                is_data_fetching: action.status,
            };
        case UPDATE_CURRENT_PAGE:
            return {
                ...state,
                current_page: action.page,
            };
        case SET_ABORT_SIGNAL:
            return {
                ...state,
                abort_controller: action.abort_controller,
            };
        case ADD_LOG:
            return {
                ...state,
                log: [
                    ...state.log,
                    {message: action.message, type: action.message_type}
                ],
            };
        default:
            return state;
    }
};

export const updateSearchRequest = search_request => ({type: UPDATE_SEARCH_REQUEST, search_request});
export const setSearchResults = ({data, total}) => ({type: SET_SEARCH_RESULTS, data, total});
export const toggleIsFetchingData = status => ({type: TOGGLE_IS_FETCHING_DATA, status});
export const updateCurrentPage = page => ({type: UPDATE_CURRENT_PAGE, page});
export const setAbortSignal = abort_controller => ({type: SET_ABORT_SIGNAL, abort_controller});
export const addLog = (message, message_type) => ({type: ADD_LOG, message, message_type});

export const getSearchResults = query => dispatch => {
    console.log(query);
    const { search_request, page } = query;
    const abort_controller = new AbortController();
    dispatch(toggleIsFetchingData(true));
    dispatch(setAbortSignal(abort_controller));
    return getRepos(search_request, page, abort_controller)
        .then(response => {
            const data = response.items.map(item => ({
                id: item.id,
                title: item.full_name,
                url: item.html_url,
                description: item.description,
            }));
            const {total_count: total} = response;
            //dispatch(setSearchResults(data, total));
            dispatch(updateCurrentPage(page));
            dispatch(toggleIsFetchingData(false));
            return {data, total}
        })
        // .catch(e => {
        //     dispatch(toggleIsFetchingData(false));
        //     dispatch(addLog(`search-reducer: ${e.message}`, 'error'));
        // });
};

export default searchReducer;