import React, { Component } from 'react'

export default class PlayGameButton extends Component {

  redirectToGame = () => {
    return this.props.history.push('/gamelist')
}
  render() {
    return (
      <div>
        <button className='button' onClick={this.redirectToGame}>Start the Game</button>
      </div>
    )
  }
}
