import {combineReducers} from 'redux'
import users from './users'
import currentUser from './currentUser'
import gamePaintings from './gamePaintings'
export default combineReducers ({
    users,
    gamePaintings,
    currentUser
})