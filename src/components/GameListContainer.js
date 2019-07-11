import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameList from './GameList'
import { createGame, getGames, getOneGame } from '../actions/games'


export class GameListContainer extends Component {
componentDidMount() {
  return this.props.getGames() //gets all the games that can be playec
}

onClickNewGame = (event) => {
  console.log('new game made')
  event.preventDefault()
  this
    .props
    .createGame()
    .then(response => {
      const { gameId } = response.body
      console.log('gameId test:', gameId)
      this
        .props
        .getOneGame(gameId)
        .then(response => {
          //redirect to new game path with id of new game '/:game(newid)
          this.props.history.push(`/game/${gameId}`)
        })
    })  // creates a new game when new game is clicked

  
}

onClickGame = (event) => {
  event.preventDefault()
  const gameId = event.target.value
  this.props.history.push(`/game/${gameId}`)
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

export default connect(mapStateToProps, { createGame, getGames, getOneGame })(GameListContainer)

