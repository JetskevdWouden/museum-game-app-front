import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm';
import { login } from '../actions/auth'
import { Redirect } from 'react-router-dom' 


export class LoginFormContainer extends Component {
    state = { username: '', password: '', redirect: false}

    onSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    renderRedirect = () => {
        if (this.state.redirect) {
        return <Redirect to='/sign-up' />
        }
    }
    
    render() {
        return <div><LoginForm 
                    onSubmit={this.onSubmit} 
                    onChange={this.onChange} 
                    values={this.state}
                    onClick={this.onClick}
                />
                    {this.renderRedirect()}
                    <button onClick={this.setRedirect}>Sign Up</button>
                </div>
        }
}

export default connect(null, { login })(LoginFormContainer)