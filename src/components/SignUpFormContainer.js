import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm';
import { signUp } from '../actions/auth'
import { Redirect } from 'react-router-dom'


export class SignUpFormContainer extends Component {
    state = { 
      username: '', 
      password: '', 
      password_confirmation: '',
      redirect: false
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.signUp(
          this.state.username, 
          this.state.password, 
          this.state.password_confirmation
        )
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
        return <Redirect to='/' />
        }
    }
    
    render() {
        return <div><SignUpForm
                    onSubmit={this.onSubmit} 
                    onChange={this.onChange} 
                    values={this.state}
                />
                {this.renderRedirect()}
                <button onClick={this.setRedirect}>Click here to log in</button>
                </div>
    }
}

export default connect(null, { signUp })(SignUpFormContainer)