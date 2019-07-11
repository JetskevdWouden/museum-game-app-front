import React from 'react'


export default function GameList(props) {
  console.log("ARE THESE MY GAMES??", props)
  return (
    <div>
      <div>
        <h2>Add a New Game</h2>
      
        <button onClick={props.newGame} className='button'>New Game</button>
      </div>
      <div>
        <h2>Join a Game</h2>
        {
          props.games.map(game => {
            return <button className='button'
              key={game.id} 
              value={game.id} 
              onClick={props.clickGame}>GAME {game.id}
            </button>
          })
        }
      </div>
    </div>
  )
}
