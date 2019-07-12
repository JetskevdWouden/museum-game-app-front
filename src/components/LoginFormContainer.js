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

    
    render() {
        return <div><LoginForm 
                    onSubmit={this.onSubmit} 
                    onChange={this.onChange} 
                    values={this.state}
                    onClick={this.onClick}
                />
                <div className='header'>
            <h1>Hello, welcome to the Museum Game!</h1>
            <p className='intro'>Have a look to our paintings below.<br/>If you want to play the game you can login or sign up.
            <br/>When the game starts you will see a covered painting.<br/>You can discover the painting by clicking on it and then you can guess the title of the picture. 
            <br />Try to be fast in your choices, don't make other players wait for you. </p>
            <button className='button signup' onClick={this.redirectToSignUp}>Sign Up</button>
            </div>
                    
                </div>
        }
}

export default connect(null, { login })(LoginFormContainer)