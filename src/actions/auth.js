import request from 'superagent'

export const LOGIN_SUCCES = 'LOGIN_SUCCES'
export const SIGNUP_SUCCES = 'SIGNUP_SUCCES'

const baseUrl = 'http://localhost:5000'

const loginSucces = JWT => ({
  type: LOGIN_SUCCES,
  JWT
})

export const login = (username, password) => dispatch => {
  request 
    .post(`${baseUrl}/login`)
    .send({ username, password })
    .then(response => {
      dispatch(loginSucces(response.body.JWT))
    })
    .catch(console.error)
}

const signUpSucces = (newUser) => ({
  type: SIGNUP_SUCCES,
  newUser
})

export const signUp = (username, password, password_confirmation) => dispatch => {
  console.log('hello')
  request 
    .post(`${baseUrl}/sign-up`)
    .send({ username, password, password_confirmation })
    .then(response => {
      dispatch(signUpSucces(response.body))
    })
    .catch(console.error)
}