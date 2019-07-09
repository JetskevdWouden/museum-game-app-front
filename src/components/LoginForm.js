import React from 'react'

export default function LoginForm(props) {
    return (
        <div>
            <div id='loginForm'>
                <form onSubmit={props.onSubmit}>
                    <label>
                    Username:
                    <input 
                        type='text' 
                        name='username' 
                        onChange={props.onChange}
                        value={props.values.username}
                    />
                    </label>
                    <label>
                    Password:
                    <input 
                        type='text' 
                        name='password'
                        onChange={props.onChange}
                        value={props.values.password}
                    />
                    </label>
                    <button className='button'>Login</button>
                </form>
            </div>
        </div>
    )
}
