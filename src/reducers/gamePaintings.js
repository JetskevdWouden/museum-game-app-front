import {GET_PAINTINGS} from '../actions/getPaintings'
import {GET_ANSWERS} from '../actions/getPaintings'
const initialState = {}

export default function (state= initialState, action){
    switch (action.type){
        case GET_PAINTINGS:
            return action.payload
        case GET_ANSWERS:
                return action.payload
        default:
            return state
    }

}