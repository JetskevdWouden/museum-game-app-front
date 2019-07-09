import {GET_PAINTINGS} from '../actions/getPaintings'
const initialState = []

export default function messages (state= initialState, action){
    switch (action.type){
        case GET_PAINTINGS:
            return action.payload
        default:
            return state
    }

}