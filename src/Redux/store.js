import { createStore } from 'redux'
import productsCrud from './products'
import companyCrud from './company'


// Sets the initial state of the app
const initialState = {
    orders: [],
    products: [],
    suppliers: [],
    clients: [],
    staff: [],
    loginError: null,
    loggedIn: false,
    path: null,
    currentUser: null
}

// These are the reducers/actions that change the state ("setState")
const reducer = (state, action) => {
    // console.log(state)

    switch (action.type) {
        case 'products':
            return productsCrud(state, action)

        case 'company':
            return companyCrud(state, action)

        case 'set_loginError':
            return { ...state, loginError: action.loginError }

        case 'set_loggedIn':
            return { ...state, loggedIn: action.loggedIn, currentUser: action.currentUser }

        case 'set_path':
            return { ...state, path: action.path }

        default:
            if (!action.type.match(/@@redux.*/)) {
                console.log(`Redux: Action not recognized: ${action.type}`)
            }
            return state
    }

}
// Create and export a new Redux store
export default createStore(reducer, initialState)
