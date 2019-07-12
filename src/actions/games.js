import request from 'superagent'

// const baseUrl = 'http://localhost:5000'
const baseUrl = 'https://protected-eyrie-79199.herokuapp.com'

// CREATE A GAME
export const GAME_CREATE_SUCCES = 'GAME_CREATE_SUCCES'

const gameCreateSuccess = payload => ({
  type: GAME_CREATE_SUCCES,
  payload
})

export const createGame = () => (dispatch, getState) => {
  const jwt = getState().currentUser
  return request
    .post(`${baseUrl}/new-game`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(gameCreateSuccess(response.body.game))
      return response
    })
    .catch(console.error)
}


//GET ONE GAME BY ID
export const GET_ONE_GAME_SUCCES = 'GET_ONE_GAME_SUCCES'

const getOneGameSucces = payload => ({
  type: GET_ONE_GAME_SUCCES,
  payload
})

export const getOneGame = (id) => (dispatch, getState) => {
  const jwt = getState().currentUser
  return request(`${baseUrl}/game/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(getOneGameSucces(response.body))
      return response
    })
    .catch(console.error)
}


//GET ALL THE GAMES
export const GET_GAMES_SUCCES = 'GET_GAMES_SUCCES'

const getGamesSucces = payload => ({
  type: GET_GAMES_SUCCES,
  payload
})

export const getGames = () => (dispatch, getState) => {
  const jwt = getState().currentUser
  request
    .get(`${baseUrl}/open-games`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(getGamesSucces(response.body.games))
    })
    .catch(console.error)
}