"use strict"

export function booksReducers(state={ books: []}, action) {
    switch(action.type) {
        case "POST_BOOK": 
        const books = state.books.concat(action.payload);
        return {
            books: [...state.books, ...action.payload],
        };
        break;
        case "DELETE_BOOK":

        const currentBookToDelete = [...state.books];

        const bookIndexToDelete = currentBookToDelete.findIndex((book) => {
            return book.id === action.payload.id;
            }
        )

        return {books: [...currentBookToDelete.slice(0, bookIndexToDelete), 
            ...currentBookToDelete.slice(bookIndexToDelete + 1)]
        };
        break;
        case "UPDATE_BOOK":

        const currentBookToUpdate = [...state.books];

        const bookIndexToUpdate = currentBookToUpdate.findIndex((book) => {
            return book.id === action.payload.id;
            }
        )

        const newBookToUpdate = {
            ...currentBookToUpdate[bookIndexToUpdate],
            title: action.payload.title,
        }

        return {books: [...currentBookToUpdate.slice(0, bookIndexToUpdate), 
            newBookToUpdate, ...currentBookToUpdate.slice(bookIndexToUpdate + 1)]
        };
        break;
    }
    return state
}
