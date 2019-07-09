import request from 'superagent'

export const LOGIN_SUCCES = 'LOGIN_SUCCES'

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