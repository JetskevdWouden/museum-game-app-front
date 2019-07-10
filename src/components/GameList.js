import React from 'react'

// function renderGame(game) {
//   console.log("IS THIS ONE GAME?", game)
//   return (
//     <button key={game.id}>GAME {game.id}</button>
//   )
// }

export default function GameList(props) {
  console.log("ARE THESE MY GAMES??", props.games)
  const games = props.games
  return (
    <div>
      <div>
        <h2>Add a New Game</h2>
        <button onClick={props.newGame}>New Game</button>
      </div>
      <div>
        <h2>Join a Game</h2>
        {
          games.map(game => {
            return <button key={game.id} value={game.id} onClick={props.clickGame}>GAME {game.id}</button>
          })
        }
      </div>
    </div>
  )
}
