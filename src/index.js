import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_SPECIFIC_MOVIE', fetchSpecificMovie);
    yield takeEvery('EDIT_MOVIE', editMovie);
};

//get all movies from the db
function* fetchMovies(action) {
    try {
        let response = yield axios.get('/movieList')
        console.log(response);
        yield put({ type: 'SET_MOVIES', payload: response.data })
    } catch (error) {
        console.log('error in Get on fetchMovies', error);

    }
};

//get specific movie from the db using the id
function* fetchSpecificMovie(action) {
    try {
        let specific = yield axios.get(`/movieList/genre/${action.payload}`);
        console.log('Specific', specific.data);
        yield put({
            type: 'SET_SPECIFIC',
            payload: specific.data
        })

    } catch (error) {
        console.log('error in GET on fetchSpecificMovie', error);

    }
}


//sends changes to the db for the title and description
function* editMovie(action) {
    try {
        yield axios.put(`/movieList`, action.payload);
        yield put({
            type: 'FETCH_SPECIFIC_MOVIE',
            payload: action.payload.id
        })
    } catch (error) {
        console.log('error in put on editMovie', error);

    }
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
};



// Used to store the movie genres
// const genres = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_GENRES':
//             return action.payload;
//         default:
//             return state;
//     }
// }

//Used to store the specific movie
const specificMovie = (state = { genres: [] }, action) => {
    switch (action.type) {
        case 'SET_SPECIFIC':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        // genres,
        specificMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
