import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameList from './GameList'
import { createGame, getGames, getOneGame } from '../actions/games'
import * as request from 'superagent'

export class GameListContainer extends Component {
  basUrl = "https://protected-eyrie-79199.herokuapp.com"


  componentDidMount() {
    this.props.getGames() //gets all the games that can be played
  }


  onClickNewGame = (event) => {
    event.preventDefault()
    this
      .props
      .createGame()
      .then(response => {
        const { id } = response.body.game
        this
          .props
          .getOneGame(id)
          .then(response => {
            //redirect to new game path with id of new game '/:game(newid)
            this.props.history.push(`/game/${id}`)
          })

      })  // creates a new game when new game is clicked


  }

  onClickGame = (event) => {
    event.preventDefault()
    const gameId = event.target.value
    const {jwt} = this.props.currentUser

    request
      .put(`${this.basUrl}/join-game`)
      .set('Authorization', `Bearer ${jwt}`)
      .send({ gameId })
      .then(response => {
        this.props.history.push(`/game/${gameId}`)
      })
      .catch(console.error)

  }



  render() {
    return (
      <div>
        <GameList
          newGame={this.onClickNewGame}
          games={this.props.games}
          clickGame={this.onClickGame}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  games: state.games,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { createGame, getGames, getOneGame })(GameListContainer)

