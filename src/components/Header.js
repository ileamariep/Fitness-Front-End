import React from 'react';
import Navigation from './Navigation';

// import {
//     storeCurrentUser,
//     clearCurrentUser
// } from '../auth';

const Header = ({ currentUser,
    setCurrentUser }) => {


    return (
        <header>
            <h1>Fitness Tracker</h1>
            <Navigation
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />

        </header>)
}

export default Header;