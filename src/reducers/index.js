import {combineReducers} from 'redux'
import users from './users'
import game from './game'
import currentUser from './currentUser'
import newUser from './newUser'

export default combineReducers ({
    users,
    game,
    currentUser,
    newUser
})