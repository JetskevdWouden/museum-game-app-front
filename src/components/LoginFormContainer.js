import React, { Component } from 'react'
import LoginForm from './LoginForm';
import './LoginForm'

export default class LoginFormContainer extends Component {
    handleSubmit = event => event.preventDefault()
    
    handleCange = event => this.setState({ value: event.target.value });

    render() {
        return (
            <div>
                <LoginForm onSubmit={this.handleSubmit} onChange={this.handleCange} />
            </div>
        )
    }
}
