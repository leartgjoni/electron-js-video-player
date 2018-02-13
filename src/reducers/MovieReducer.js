import {
    GET_MOVIES,
    SELECT_MOVIE,
    START_FETCHING_MOVIES,
    RESET_PAGE,
    CLOSE_MOVIE
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    movies: null,
    page: 1,
    maxPage: null,
    selected_movie: null,
    FOLDER_PATH: null
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_PAGE:
            return { ...state, page: 1 };
        case START_FETCHING_MOVIES:
            return { ...state, loading: true };
        case GET_MOVIES:
            return { ...state, movies: action.payload.movies, page: action.payload.page, maxPage: action.payload.maxPage, FOLDER_PATH: action.payload.FOLDER_PATH, loading: false };
        case SELECT_MOVIE:
            return { ...state, selected_movie: action.payload };
        case CLOSE_MOVIE:
            return { ...state, selected_movie: null };
        default:
            return state;
    }
}