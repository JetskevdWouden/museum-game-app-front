import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm';
import { signUp } from '../actions/auth'


export class SignUpFormContainer extends Component {
    state = { 
      username: '', 
      password: '', 
      password_confirmation: ''
    }

    onSubmit = (event) => {
        console.log('this.props.signup:', this.props)
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
    
    render() {
        return <SignUpForm
                    onSubmit={this.onSubmit} 
                    onChange={this.onChange} 
                    values={this.state}
                />
    }
}

export default connect(null, { signUp })(SignUpFormContainer)