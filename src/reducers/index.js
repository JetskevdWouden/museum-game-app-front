import {combineReducers} from 'redux'
import users from './users'
import currentUser from './currentUser'
import newUser from './newUser'
import gamePaintings from './gamePaintings'

export default combineReducers ({
    users,
    currentUser,
    newUser,
    gamePaintings
})