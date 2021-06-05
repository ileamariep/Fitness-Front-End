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
        <form onSubmit={HandleFormSubmit}>
            <h1>Create Routine</h1>

            <label>
                Routine Name:
          <input
                    name="Routine Name"

                    value={routineName}
                    onInput={(event) => {
                        setRoutineName(event.target.value)
                    }}
                    required />
            </label>

            <label>
                Routine Goal:
          <input
                    name="Routine Goal"

                    value={routineGoal}
                    onInput={(event) => {
                        setRoutineGoal(event.target.value)
                    }}
                    required />
            </label>

            <button type='submit'>Submit</button>
        </form>
    );
}


export default CreateRoutine;