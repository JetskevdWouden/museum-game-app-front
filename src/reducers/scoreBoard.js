import {SET_SCOREBOARD, UPDATE_SCOREBOARD} from '../actions/scoreBoard'

const initialState = []

export default function(state = initialState, action = {}) {
    switch(action.type) {
        case SET_SCOREBOARD:
            return action.payload
        case UPDATE_SCOREBOARD:
            const currentUser = state.find(userData=> userData.userId === action.payload.id)
            currentUser.score = action.payload.points
            return [...state]
        default: 
            return state
    }
}

//NOTES
//state.scoreBoard --> array of score objects (id, score, userId, gameId)