import React, { useState } from 'react';
import { createRoutine } from '../api'

const CreateRoutine = ({ routines, setRoutines }) => {
    const [routineName, setRoutineName] = useState("");
    const [routineGoal, setRoutineGoal] = useState("");





    const HandleFormSubmit = (event) => {
        createRoutine(routineName, routineGoal)


        event.preventDefault();
    }



    return (
        <div className='form-container'>
            <form onSubmit={HandleFormSubmit}>
                <h1>Create Routine</h1>
                <br />

                <label>
                    <h3>Name</h3>
                    <input
                        name="Routine Name"

                        value={routineName}
                        onInput={(event) => {
                            setRoutineName(event.target.value)
                        }}
                        required />
                </label>
                <br />
                <label className='routineGoal'>
                    <h3>Goal</h3>
                    <input
                        name="Routine Goal"

                        value={routineGoal}
                        onInput={(event) => {
                            setRoutineGoal(event.target.value)
                        }}
                        required />
                </label>
                <br />
                <button type='submit' className='log-btn'>Submit</button>
            </form>
        </div>
    );

}


export default CreateRoutine;