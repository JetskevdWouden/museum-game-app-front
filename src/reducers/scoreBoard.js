import {SET_SCOREBOARD} from '../actions/scoreBoard'

const initialState = []

export default function(state = initialState, action = {}) {
    switch(action.type) {
        case SET_SCOREBOARD:
            return action.payload
        default: 
            return state
    }
}

//NOTES
//state.scoreBoard --> array of score objects (id, score, userId, gameId)