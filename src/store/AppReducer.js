const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                avaliableBooks: [...state.avaliableBooks, action.payload]
            }
        case 'ADD_BOOK':
            return {
                ...state,
                avaliableBooks: [...state.avaliableBooks, action.payload]
            }
        case 'ADD_FAVORITE':
            return {
                ...state,
                favoriteBooks: [...state.favoriteBooks, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                favoriteBooks: state.favoriteBooks.filter(book => book.id != action.payload)
            }
        case 'DELETE_BOOK':
            return {
                ...state,
                avaliableBooks: state.avaliableBooks.filter(book => book.id != action.payload)
            }
        case 'ADD_USER':
            return {
                ...state,
                avaliableUsers: [...state.avaliableUsers, action.payload]
            }
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: null
            }
        default:
            return state;
    }
}

export default reducer

/* case 'ADD_ITEM':
    return {
        shoppingList: [action.payload, ...state.shoppingList]
    }
case 'REMOVE_ITEM':
    return {
        shoppingList: state.shoppingList.filter(item => item !== action.payload)
    } */