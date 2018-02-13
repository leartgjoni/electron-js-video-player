import {
    GET_MOVIES,
    SELECT_MOVIE,
    START_FETCHING_MOVIES,
    RESET_PAGE,
    CLOSE_MOVIE
} from '../actions/types';
const { ipcRenderer } = window.require('electron');

export const startFetchingMovies = () => { return { type: START_FETCHING_MOVIES } };

export const resetPage = () => { return { type: RESET_PAGE } };

export const getMovies = (category_id, page) => dispatch => {
    ipcRenderer.send('getMovies', { category_id, page });
    ipcRenderer.on('movies', (event, { movies, maxPage, FOLDER_PATH }) => {
        dispatch({ type: GET_MOVIES, payload: { movies, maxPage, FOLDER_PATH, page } });
    });
};

export const selectMovie = (movie_path) => { return { type: SELECT_MOVIE, payload: movie_path } };
export const closeMovie = () => { return {type: CLOSE_MOVIE }};