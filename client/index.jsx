import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import mapReducer from './reducers/Map';
import Map from './components/Map';

var reducer = combineReducers({
    map: mapReducer
});

const store = createStore(reducer);

const locations = [
    [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1],
    [1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1],
    [1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
    [1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1],
    [1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
ReactDOM.render(
    <Provider store={store}>
        <Map locations={locations}  />
    </Provider>
    ,
    document.getElementById('app')
);