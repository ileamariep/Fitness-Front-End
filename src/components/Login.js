import React, { useState } from 'react';
import { loginUser } from '../api'
import backgroundLogin from "../img/man-fitness-bw.png"
import './forms.css';



const Login = ({ setCurrentUser, currentUser }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // const [loggedIn, setLoggedIn] = useState(false)


    // const handleButtonClick = (event) => {
    //     window.location.href = '/routines'
    // }



    const HandleFormSubmit = (event) => {
        event.preventDefault();
        loginUser(username, password)
        // setLoggedIn(true)
    }

    // if (!loggedIn) {


    return (
        <div className="form-container">

            <div className="form-inner-container-login" style={{
                backgroundImage: `url(${backgroundLogin})`
            }}>
                <form className="login-reg-form" onSubmit={HandleFormSubmit}>


                    <h1 className='form-header'>Login</h1>
                    <div className='user-name-container'>
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
                    </div>
                    <div className='password-container'>
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
                    </div>

                    <button type='submit' className='log-btn' >Login</button>

                </form>


            </div>
        </div>

    );
    // } else {

    //     return (
    //         <div className='success-message-container'>
    //             <div className='success-message'>
    //                 <h1>You're set! Time to start tracking</h1>
    //                 <button className='log-btn' onClick={handleButtonClick} >Go To Routines</button>
    //             </div>
    //         </div>

    //     )

    // }
}


export default Login;