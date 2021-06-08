import React, { useState } from 'react';
import { registerUser } from '../api'
import backgroundLogin from "../img/woman-fitness-bw.png"
import './forms.css';

const Register = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");



    const HandleFormSubmit = (event) => {
        registerUser(username, password)
        event.preventDefault();
    }

    return (
        <div className="form-container">
            <div className="form-inner-container-register" style={{
                backgroundImage: `url(${backgroundLogin})`
            }}>

                <form className="login-reg-form" onSubmit={HandleFormSubmit}>
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

                    <button type='submit' className='log-btn' >Register</button>
                </form>
            </div>
        </div>

    );
}


export default Register;