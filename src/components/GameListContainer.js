import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameList from './GameList'
import { createGame, getGames } from '../actions/games'


export class GameListContainer extends Component {

componentDidMount() {
  return this.props.getGames()
}

onClickNewGame = (event) => {
  console.log('new game made')
  event.preventDefault()
  this.props.createGame()
  //redirect to new game path with id of new game '/:game(newid)
}

onClickGame = (event) => {
  event.preventDefault()
  const gameId = event.target.value
  //eventually edit to redirect to correct game where gameId = game.id
  console.log(`REDIRECT to /:game${gameId}`)
}

  render() {
    console.log("HELLO?!",this.props.games)
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
  games: state.games
})

export default connect(mapStateToProps, { createGame, getGames })(GameListContainer)

