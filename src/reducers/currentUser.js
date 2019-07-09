import { LOGIN_SUCCES } from '../actions/auth'

export default function (state = null, action) {
  switch(action.type) {
    case LOGIN_SUCCES: //when user logs in
      return action.JWT
    default:
      return state
  }
}