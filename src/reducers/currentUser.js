import { LOGIN_SUCCES } from '../actions/auth'

export default function (state = null, action) {
  console.log(action.JWT)
  switch(action.type) {
    case LOGIN_SUCCES:
      return action.JWT
    default:
      return state
  }
}