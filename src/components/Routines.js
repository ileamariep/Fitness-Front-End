import React, { useEffect } from 'react';

import { getPublicRoutines } from '../api'


const Routines = ({ routines, setRoutines }) => {

    useEffect(() => {

        getPublicRoutines()
            .then(routine => {
                setRoutines(routine);
            })
            .catch(error => {
                // something something errors
            });
    }, [setRoutines]);

    return (
        <>
            <div className='page-head'><h1>Routines</h1></div>
            <div id="routines-container">

                {routines.map(({ id,
                    creatorId,
                    isPublic,
                    name,
                    goal,
                    creatorName,
                    activities }) => (

                    <div key={id} className="routine-cards">
                        <div className="card">
                            <div className='card-name'>Routine Name:<p>{name}</p></div>
                            <div className='card-goal'>Goal:<p>{goal}</p></div>
                            <div>Activities</div>
                            <div className='card-activity'>
                                <>
                                    {
                                        activities.map(({ id, name, description, duration, count, routineActivityId, routineId }) =>
                                            <div className='activities' key={id}> {name}, Count: {count}, Duration: {duration}</div>
                                        )
                                    }
                                </>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )


}





export default Routines;

/// activities = [{id, name, description, duration, count, routineActivityId, routineId}]