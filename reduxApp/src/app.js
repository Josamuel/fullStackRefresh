"use strict"
import { createStore } from 'redux';


import reducers from './reducers/index';
import { Z_BEST_COMPRESSION } from 'zlib';
// the point of a reducer is to evaluate what to do with a received action


const store = createStore(reducers);

store.subscribe(function() {
    console.log('current state is', store.getState());
})

store.dispatch({
    type: "POST_BOOK", 
    payload: [{
            id: 1,
            title: 'book title 1',
            description: 'this is the best book',
            price: 45,
        }, 
        {
            id: 2,
            title: 'book title 2',
            description: 'this is the second best book',
            price: 20,
        }] 
})

store.dispatch({
    type: "DELETE_BOOK",
    payload: {
        id: 1,
    }
})

store.dispatch({
    type: "UPDATE_BOOK",
    payload: {
        id: 2,
        title: 'Learning Redux quickly!'
    }
})

store.dispatch({
    type:"ADD_TO_CART",
    payload: [{id: 1}]
})