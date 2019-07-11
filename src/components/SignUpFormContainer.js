import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm';
import { signUp } from '../actions/auth'


export class SignUpFormContainer extends Component {
    state = { 
      username: '', 
      password: '', 
      password_confirmation: '',
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

    redirecToHome = () => {
      return this.props.history.push('/')
    }
    
    render() {
        return <div>
                  <SignUpForm
                    onSubmit={this.onSubmit} 
                    onChange={this.onChange} 
                    values={this.state}
                />
                <button onClick={this.redirecToHome}>Click here to log in</button>
                </div>
    }
}

export default connect(null, { signUp })(SignUpFormContainer)