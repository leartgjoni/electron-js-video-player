import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CategoryReducer from './CategoryReducer';
import MovieReducer from './MovieReducer';

const rootReducer =  combineReducers({
    category: CategoryReducer,
    movie: MovieReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;