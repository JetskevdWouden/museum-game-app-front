import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameList from './GameList'


export default class GameListContainer extends Component {


  render() {
    return (
      <div>
        <GameList />
      </div>
    )
  }
}

