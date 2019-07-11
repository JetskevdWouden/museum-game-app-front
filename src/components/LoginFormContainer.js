import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm';
import { login } from '../actions/auth'


export class LoginFormContainer extends Component {
    state = { username: '', password: ''}

    onSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    redirectToSignUp = () => {
        return this.props.history.push('/sign-up')
    }

    redirectToGame = () => {
        return this.props.history.push('/gamelist')
    }

    redirectToGameInstruction = () => {
        return this.props.history.push('/instructions')
    }
    
    render() {
        return <div><LoginForm 
                    onSubmit={this.onSubmit} 
                    onChange={this.onChange} 
                    values={this.state}
                    onClick={this.onClick}
                />
                    <button onClick={this.redirectToSignUp}>Sign Up</button>
                    <button onClick={this.redirectToGame}>Start the Game</button>
                    <button onClick={this.redirectToGameInstruction}>How does the game work?</button>
                </div>
        }
}

export default connect(null, { login })(LoginFormContainer)