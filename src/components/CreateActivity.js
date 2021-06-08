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
        <div className='form-container'>
            <form onSubmit={HandleFormSubmit}>
                <h1>Create Activity</h1>
                <br />
                <label>
                    <h3>Activity Name</h3>
                    <input
                        name="Activity Name"

                        value={activityName}
                        onInput={(event) => {
                            setActivityName(event.target.value)
                        }}
                        required />
                </label>
                <br />
                <label>
                    <h3>Description</h3>
                    <input
                        name="Description"

                        value={actvitiyDescription}
                        onInput={(event) => {
                            setActivityDescription(event.target.value)
                        }}
                        required />
                </label>

                <br />
                <button type='submit' className='log-btn'>CREATE</button>
            </form>
        </div>
    );

}


export default CreateActivity;