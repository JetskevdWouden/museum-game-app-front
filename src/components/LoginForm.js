import React from 'react'

export default function LoginForm (props){
        return (
            <div>
                <div id='loginForm'>
                    <form onSubmit={props.onSubmit}>
                        <input type='text' name='username' placeholder='Add a username' onChange={props.onChange}/>
                        <input type='text' name='password' placeholder='Add a password' onChange={props.onChange}/>
                        <button type='submit' className='button'>Login</button>
                    </form>
                </div>
            </div>
        )

}
