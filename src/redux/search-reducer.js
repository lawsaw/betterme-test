const UPDATE_SEARCH_REQUEST = 'UPDATE_SEARCH_REQUEST';

let initial_state = {
    search_request: '',
};

const searchReducer = (state = initial_state, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_REQUEST:
            return {
                ...state,
                search_request: action.search_request,
            };
        default:
            return state;
    }
};

export const updateSearchRequest = search_request => ({type: UPDATE_SEARCH_REQUEST, search_request});

export default searchReducer;