
import {CHECK_ANSWER} from '../actions/checkAnswer'
import {GET_LIFES, GET_POINTS} from '../actions/game'
const initialState = {}

export default function (state = initialState, action){
    switch (action.type){
        case CHECK_ANSWER:
            return { ...state, title: action.payload}
        case GET_LIFES:
            return { ...state, lifes: action.payload}   
        case GET_POINTS:
            return { points: action.payload}
        default:
            return state
    }
}