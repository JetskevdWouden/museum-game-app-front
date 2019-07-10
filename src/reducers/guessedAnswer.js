
import {CHECK_ANSWER} from '../actions/checkAnswer'
const initialState = {}

export default function (state = initialState, action){
    switch (action.type){
        case CHECK_ANSWER:
            return { title: action.payload}
        default:
            return state
    }
}