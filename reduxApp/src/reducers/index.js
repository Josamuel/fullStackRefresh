
import {combineReducers} from 'redux';

import {booksReducers} from './booksReducers'
import {cartReducers} from './cartReducers'

// takes an object as an argument, object represents the state.  we can 
// import all of our reducers from separate files and have them all in 
// one object.
export default combineReducers({
    books: booksReducers,
    cart: cartReducers,
})