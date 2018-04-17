"use strict"
import { createStore } from 'redux';

// the point of a reducer is to evaluate what to do with a received action

const reducer = function(state={ books: []}, action) {
    switch(action.type) {
        case "POST_BOOK": 
        let books = state.books.concat(action.payload);
        return {
            books: state.books.concat(action.payload)
        };

        // case "INCREMENT_STATE_NUMBER": return Object.assign(state, {state, ...action.payload});
        break;
    }
}

const store = createStore(reducer);

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
    type: "POST_BOOK", 
    payload: {
            id: 3,
            title: 'book title 3',
            description: 'this is the third book',
            price: 25,
        }, 
})

// store.dispatch({
//     type: "INCREMENT_STATE_NUMBER",
//     payload: {
//         number: 1,
//     }
// })