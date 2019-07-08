import React from 'react'

export default function LoginForm (props){
    
        return (
            <div>
                <div id='loginForm'>
                    <form>
                        <input type='text' name='username' placeholder='Add a username'/>
                        <input type='text' name='password' placeholder='Add a password'/>
                        <button type='button'>Login</button>
                    </form>
                </div>
            </div>
        )

}
