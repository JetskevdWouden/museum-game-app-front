import request from 'superagent'

const baseUrl = 'https://protected-eyrie-79199.herokuapp.com'


// CREATE A GAME
export const GAME_CREATE_SUCCES = 'GAME_CREATE_SUCCES'

const gameCreateSuccess = payload => ({
  type: GAME_CREATE_SUCCES,
  payload
})

export const createGame = () => (dispatch) => {
  return request
    .post(`${baseUrl}/new-game`)
    .then(response => {
      console.log('response test:', response)
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

export const getOneGame = (id) => (dispatch) => {
  return request(`${baseUrl}/game/${id}`)
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

export const getGames = () => (dispatch) => {
  request
    .get(`${baseUrl}/open-games`)
    .then(response => {
      dispatch(getGamesSucces(response.body.games))
    })
    .catch(console.error)
}

