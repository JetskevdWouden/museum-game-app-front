import {combineReducers} from 'redux'
import users from './users'
import game from './game'
import currentUser from './currentUser'

export default combineReducers ({
    users,
    game,
    currentUser
})