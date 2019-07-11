import React from 'react'
import { Route } from 'react-router-dom'
import ImageListContainer from './ImageListContainer';
import LoginFormContainer from './LoginFormContainer';
import SignUpFormContainer from './SignUpFormContainer';
import GameContainer from './GameContainer';
import GameListContainer from './GameListContainer'
import ScoreBoardContainer from './ScoreBoardContainer';

export default function Routes() {
  return (
    <div>
      
      <Route path="/" exact component={LoginFormContainer} />
      <Route path="/sign-up" exact component={SignUpFormContainer} />
      <Route path="/" exact component={ImageListContainer} />
      <Route path="/game" exact component={GameContainer} />
      <Route path="/gamelist" exact component={GameListContainer} />
      <Route exact path='/scoreboard/:id' component={ScoreBoardContainer} />
    </div>
  )
}
