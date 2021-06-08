import React, { useState, useEffect } from "react";

import RoutineRow from "./RoutineRow";
import { myUsernameFetch, myRoutinesFetch } from '../api'

// const MyRoutines = () => {
//     let myUsername;
//     const [myRoutines, setMyRoutines] = useState([]);

//     useEffect(async () => {
//         const myToken = await JSON.parse(localStorage.getItem('token'));
//         if (myToken) {
//             myUsername = await myUsernameFetch(myToken);
//             const routines = await myRoutinesFetch(myUsername, myToken);
//             setMyRoutines(routines);
//         }
//     }, []);

const MyRoutines = () => {
    const [myRoutines, setMyRoutines] = useState([]);

    useEffect(() => {
        const myToken = JSON.parse(localStorage.getItem('token'));
        if (myToken) {
            const fetchData = async () => {

                let myUsername;

                try {
                    myUsername = await myUsernameFetch(myToken);
                    const routines = await myRoutinesFetch(myUsername, myToken);
                    setMyRoutines(routines);

                } catch (error) {
                    console.error(error)
                }
            };

            fetchData();
        }

    }, []);

    const handleButtonClick = (event) => {
        window.location.href = '/Create-Routine'
    }

    const copy = [...myRoutines];
    const onRemoveRoutine = (idx) => {

        copy.splice(idx, 1);
        setMyRoutines(copy);
    };

    if (copy.length > 0) {
        return (
            <div id="routines-container">

                {myRoutines.map((routine, idx) => {
                    return (
                        <RoutineRow
                            key={routine.id}
                            routine={routine}
                            onRemoveRoutine={() => {
                                onRemoveRoutine(idx);
                            }}
                        />
                    );
                })}
            </div>
        );
    } else {
        return (
            <div className="success-message-container">
                <div className='success-message'>
                    <h1>Create A Routine to get started!</h1>
                    <button className='log-btn' onClick={handleButtonClick}>CREATE ROUTINE</button>
                </div>
            </div>
        );
    }

};

export default MyRoutines;
