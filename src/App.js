import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomeContainer from './components/HomeContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={HomeContainer} />
      </div>
    )
  }
}
