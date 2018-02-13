import {
    GET_CATEGORIES,
    SELECT_CATEGORY,
    START_FETCHING_CATEGORIES
} from '../actions/types';

const INITIAL_STATE = {
    loading: true,
    categories: null,
    selected_category: null
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case START_FETCHING_CATEGORIES:
            return { ...state, loading: true };
        case GET_CATEGORIES:
            return { ...state, loading: false, categories: action.payload };
        case SELECT_CATEGORY:
            return { ...state, selected_category: action.payload };
        default:
            return state;
    }
}