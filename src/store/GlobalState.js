import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { books } from '../data/books';
import { users } from '../data/users';
import { HOME_PAGE } from '../page/Pages';

localStorage.setItem("books", JSON.stringify(books))
localStorage.setItem("users", JSON.stringify(users))

const initialState = {
    currentUser: localStorage.getItem("currentUser") == null ? null : JSON.parse(localStorage.getItem("currentUser")),
    currentPage: HOME_PAGE,
    favoriteBooks: [],
    avaliableBooks: [...books],
    avaliableUsers: [...users]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function getItemFromList(id) {
        return state.avaliableBooks.find(book => book.id === id);
    }

    function getUserByUsername(username) {
        return state.avaliableUsers.find(user => user.username === username);
    }

    function isInFavorite(id) {
        return state.favoriteBooks.find(book => book.id === id) != undefined;
    }

    function deleteItemFromList(id) {
        const filteredBooks = state.avaliableBooks.filter(book => book.id !== id);
        localStorage.setItem("books", JSON.stringify(filteredBooks));
        dispatch({
            type: "DELETE_BOOK",
            payload: id
        })
    }

    function deleteFavorite(id) {
        dispatch({
            type: "DELETE_FAVORITE",
            payload: id
        })
    }


    function addUser(user) {
        const lastUserId = state.avaliableUsers.sort((a, b) => a.id - b.id)[0].id;

        dispatch({
            type: "ADD_USER",
            payload: {
                id: lastUserId + 1,
                username: user.username,
                password: user.password,
                role: 2
            }
        })
    }

    function addBook(book) {
        const lastBookId = state.avaliableBooks.sort((a, b) => b.id - a.id)[0].id;

        dispatch({
            type: "ADD_BOOK",
            payload: {
                id: lastBookId + 1,
                name: book.name,
                description: book.description,
                author: book.author,
                publishedBy: book.publishedBy,
                releaseDate: book.releaseDate,
                series: book.series,
                numberOfPages: book.numberOfPages,
                price: book.price,
                image: book.image,
            }
        })
    }

    function addFavorite(book) {
        dispatch({
            type: "ADD_FAVORITE",
            payload: {
                id: book.id,
                name: book.name,
                description: book.description,
                author: book.author,
                publishedBy: book.publishedBy,
                releaseDate: book.releaseDate,
                series: book.series,
                numberOfPages: book.numberOfPages,
                price: book.price,
                image: book.image,
            }
        })
    }

    function editBook(book) {
        console.log(book);
        dispatch({
            type: "DELETE_BOOK",
            payload: book.id
        })
        console.log(state.avaliableBooks);
        dispatch({
            type: "ADD_BOOK",
            payload: book
        })
        console.log(state.avaliableBooks);
    }

    function loginUser(username) {
        const user = getUserByUsername(username.username);
        if (user != null) {
            localStorage.setItem("currentUser", JSON.stringify(user))
            dispatch({
                type: "LOGIN_USER",
                payload: user
            })
        }

        return user;
    }

    function logoutUser() {
        localStorage.removeItem("currentUser")
        dispatch({
            type: "LOGOUT_USER"
        })
    }

    return (
        <GlobalContext.Provider value={{ shoppingList: state.shoppingList, avaliableBooks: state.avaliableBooks, currentUser: state.currentUser, favoriteBooks: state.favoriteBooks, getItemFromList, deleteItemFromList, addUser, addBook, editBook, addFavorite, loginUser, logoutUser, isInFavorite, deleteFavorite }}>
            {children}
        </GlobalContext.Provider>
    )
}