import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ImageListContainer from './components/ImageListContainer';
import LoginFormContainer from './components/LoginFormContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={LoginFormContainer} />
        <Route path="/" exact component={ImageListContainer} />
      </div>
    )
  }
}
