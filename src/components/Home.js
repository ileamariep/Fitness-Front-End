import React from 'react';
import backgroundLogin from "../img/fitness-bw.png"
import './home.css';
import { Link } from "react-router-dom";

import {

    REGISTER_ROUTE,
    LOGIN_ROUTE,

} from "../constants";

const Home = () => {




    return (
        <div className="home-container">

            <div className="home-inner-container" style={{
                backgroundImage: `url(${backgroundLogin})`
            }}>
                <div className="mess-btn-container">
                    <div className="welcome-message">
                        <h1>Welcome to Fitness Tracker!</h1>
                        <p>Have fun, track smart.</p>
                    </div>

                    <Link to={LOGIN_ROUTE} className="log-btn"><p className='centerP'>LOGIN</p></Link>
                    <Link to={REGISTER_ROUTE} className="reg-btn"><p className='centerP'>REGISTER</p></Link>

                </div>
            </div>
        </div>

    );
}

export default Home;