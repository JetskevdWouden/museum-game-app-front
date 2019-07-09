import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm';
import { login } from '../actions/auth'


export class LoginFormContainer extends Component {
    state = { username: '', password: ''}

    onSubmit = (event) => {
        console.log('submit')
        event.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        console.log('this.state:', this.state)
        return <LoginForm 
                    onSubmit={this.onSubmit} 
                    onChange={this.onChange} 
                    values={this.state}
                />
    }
}

export default connect(null, { login })(LoginFormContainer)