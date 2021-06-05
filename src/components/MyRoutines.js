import React, { useEffect, useState } from 'react';
import { myId } from '../api'

const MyRoutines = () => {
    let myId
    useEffect(async () => {
        const myToken = JSON.parse(localStorage.getItem('token'))
        myId()

    }, []);

    return (<div id="my-routines">
        <h1>This is the My Routines</h1>
    </div>)
}

export default MyRoutines;