import React, { useState } from 'react';
import { createActivity } from '../api'

const CreateActivity = () => {
    const [activityName, setActivityName] = useState("");
    const [actvitiyDescription, setActivityDescription] = useState("");


    const HandleFormSubmit = (event) => {
        createActivity(activityName, actvitiyDescription)

        event.preventDefault();
    }

    return (
        <form onSubmit={HandleFormSubmit}>
            <h1>Create Activity</h1>

            <label>
                Activity Name:
          <input
                    name="Activity Name"

                    value={activityName}
                    onInput={(event) => {
                        setActivityName(event.target.value)
                    }}
                    required />
            </label>

            <label>
                Description:
          <input
                    name="Description"

                    value={actvitiyDescription}
                    onInput={(event) => {
                        setActivityDescription(event.target.value)
                    }}
                    required />
            </label>

            <button type='submit'>Login</button>
        </form>
    );
}


export default CreateActivity;