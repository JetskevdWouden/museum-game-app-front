import request from 'superagent'

const baseUrl = 'http://localhost:5000'

export const GAME_CREATE_SUCCES = 'GAME_CREATE_SUCCES'

const gameCreateSuccess = payload => ({
  type: GAME_CREATE_SUCCES,
  payload
})

export const createGame = () => (dispatch) => {
  request
    .post(`${baseUrl}/new-game`)
    .then(response => {
      dispatch(gameCreateSuccess(response.body.game))
    })
    .catch(console.error)
}

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