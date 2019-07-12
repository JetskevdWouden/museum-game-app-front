import React from 'react'
import './LoginForm.css'

export default function LoginForm(props) {
    return (
        <div>
            <div id='loginForm'>
            Already have an account?
                <form onSubmit={props.onSubmit}>
                    <input 
                        type='text' 
                        name='username'
                        placeholder='Enter your username'
                        onChange={props.onChange}
                        value={props.values.username}
                    />
                    <input
                        type='text' 
                        name='password'
                        placeholder='Enter your password'
                        onChange={props.onChange}
                        value={props.values.password}
                    />
                    <button className='button'>Login</button>
                </form>
            </div>
        </div>
    )
}
