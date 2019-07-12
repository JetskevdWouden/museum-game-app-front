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
        return <div id='loginForm'>
            <div className='float'>
            <LoginForm 
                    onSubmit={this.onSubmit} 
                    onChange={this.onChange} 
                    values={this.state}
                    onClick={this.onClick}
                />
                </div>
                 <button className='button signup float' onClick={this.redirectToSignUp}>Sign Up</button>
                
                    <div className='clear'></div>
                </div>
        }
}

export default connect(null, { login })(LoginFormContainer)