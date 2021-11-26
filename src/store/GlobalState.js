import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { books } from '../data/books';
import { HOME_PAGE } from '../page/Pages';

localStorage.setItem("books", JSON.stringify(books))

const initialState = {
    currentPage: HOME_PAGE,
    currentUser: {},
    avaliableBooks: [...books],
    shoppingList: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addItemToList(item) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
    }
    function removeItemFromList(item) {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: item
        });
    }

    return (
        <GlobalContext.Provider value={{ shoppingList: state.shoppingList, avaliableBooks: state.avaliableBooks, addItemToList, removeItemFromList }}>
            {children}
        </GlobalContext.Provider>
    )
}