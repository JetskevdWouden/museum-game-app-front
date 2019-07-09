import { SIGNUP_SUCCES } from '../actions/auth'

export default function (state = null, action) {
  switch(action.type) {
    case SIGNUP_SUCCES:
      alert('You have succesfully created an new account')
      return action.newUser
    default:
      return state
  }
}