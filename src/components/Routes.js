import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import {withRouter} from 'react-router'
import { connect } from 'react-redux'
import ImageListContainer from './ImageListContainer';
import LoginFormContainer from './LoginFormContainer';
import SignUpFormContainer from './SignUpFormContainer';
import GameContainer from './GameContainer';
import GameListContainer from './GameListContainer'
import ScoreBoardContainer from './ScoreBoardContainer';
import InstructionsContainer from './InstructionsContainer'

function Routes(props) {
  return (
    <div>
     {!props.authenticated && 
        <Switch>
          {/* <Route path="/" exact component={ImageListContainer} /> */}
          <Route path="/" exact component={LoginFormContainer} />
          <Route path="/sign-up" exact component={SignUpFormContainer} />
          {/* <Route path="" render={() => <Redirect to="/sign-up" />}></Route> */}
        </Switch>
    }

      {props.authenticated && 
        <Switch>
      <Route path="/" exact component={LoginFormContainer} />
      {/* <Route path="/" exact component={ImageListContainer} /> */}
      <Route path="/game/:id" exact component={GameContainer} />
      <Route path="/gamelist" exact component={GameListContainer} />
      <Route path="/instructions" exact component={InstructionsContainer}/>
      <Route path='/scoreboard' exact component={ScoreBoardContainer} />
        </Switch>
      }

    </div>
  )
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(Routes))