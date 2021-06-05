import React, { useState } from 'react';
import { registerUser } from '../api'


const Register = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");



    const HandleFormSubmit = (event) => {
        registerUser(username, password)
        setUserName("")
        setPassword("")
        event.preventDefault();
    }

    return (
        <form onSubmit={HandleFormSubmit}>
            <h1>Create Account</h1>

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

            <button type='submit'>Register</button>
        </form>
    );
}


export default Register;