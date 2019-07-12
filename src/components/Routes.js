import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {withRouter} from 'react-router'
import { connect } from 'react-redux'
import ImageListContainer from './ImageListContainer';
import LoginFormContainer from './LoginFormContainer';
import SignUpFormContainer from './SignUpFormContainer';
import GameContainer from './GameContainer';
import GameListContainer from './GameListContainer'
import PlayGameButton from './PlayGameButton';

function Routes(props) {
  return (
    <div>

     {!props.authenticated && 
        <div>
          <Route path="/" exact component={LoginFormContainer} />
          <Route path="/sign-up" exact component={SignUpFormContainer} />
          <Route exact path="/gamelist" render={() => (<Redirect to="/" />)} />
          <Route exact path="/game/:id" render={() => (<Redirect to="/" />)} />
        </div>
     }

      {props.authenticated && 
        <Switch>
          <Route path="/" exact component={PlayGameButton} />
          <Route path="/game/:id" exact component={GameContainer} />
          <Route path="/gamelist" exact component={GameListContainer} />
        </Switch>
      }


      <Route path="/" exact component={ImageListContainer} />
    </div>
  )
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(Routes))