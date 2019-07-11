import { GAME_CREATE_SUCCES, GET_GAMES_SUCCES } from '../actions/games'

export default function (state = [], action) {
  switch(action.type) {
    case GET_GAMES_SUCCES:
      return action.payload
    case GAME_CREATE_SUCCES:
    console.log('action.payload', action.payload.id)
      return [...state, action.payload]
    default:
      return state
  }
}