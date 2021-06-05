import React, { useState } from 'react';
import { loginUser } from '../api'


const Login = ({ setCurrentUser, currentUser }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");




    const HandleFormSubmit = (event) => {
        loginUser(username, password)
        setCurrentUser(true)
        setUserName("")
        setPassword("")
        event.preventDefault();
    }

    return (
        <form onSubmit={HandleFormSubmit}>
            <h1>Login</h1>

            <label>
                Username:
          <input
                    name="username"
                    type="username"
                    value={username}
                    onInput={(event) => {
                        setUserName(event.target.value)
                    }}
                    required />
            </label>

            <label>
                Password:
          <input
                    name="password"
                    type="password"
                    value={password}
                    onInput={(event) => {
                        setPassword(event.target.value)
                    }}
                    required />
            </label>

            <button type='submit'>Login</button>
        </form>
    );
}


export default Login;