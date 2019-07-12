import {combineReducers} from 'redux'
import users from './users'
import currentUser from './currentUser'
import newUser from './newUser'
import gamePaintings from './gamePaintings'
import games from './games'
import guessedAnswer from './guessedAnswer'
import scoreBoard from './scoreBoard'

export default combineReducers ({
    users,
    currentUser,
    newUser,
    gamePaintings,
    games,
    guessedAnswer,
    scoreBoard
})