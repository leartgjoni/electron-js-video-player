import {
    GET_CATEGORIES,
    SELECT_CATEGORY,
    START_FETCHING_CATEGORIES
} from '../actions/types';
const { ipcRenderer } = window.require('electron');

export const startFetchingCategories = () => { return { type: START_FETCHING_CATEGORIES } };

export const getCategories = () => dispatch => {
    ipcRenderer.send('getCategories');
    ipcRenderer.on('categories', (event, categories) => {
        dispatch({ type: GET_CATEGORIES, payload: categories });
    });
};

export const selectCategory = (cat_id) => { return { type: SELECT_CATEGORY, payload: cat_id } };