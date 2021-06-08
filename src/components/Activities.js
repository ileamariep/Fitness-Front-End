import React, { useEffect } from 'react';

import { getActivities } from '../api'

import './activities.css';


const Activities = ({ activityList, setActivityList }) => {

    useEffect(() => {

        getActivities()
            .then(activity => {
                setActivityList(activity);

            })
            .catch(error => {
                // something something errors
            });
    }, [setActivityList]);


    return (
        <>
            <div className='page-head'><h1>Activities</h1></div>
            <div id="activity-container">

                {activityList.map(({ id,
                    name,
                    description }) => (
                    <div key={id} className="activity-cards">
                        <div className="activity-card">
                            <div className='card-name'>Activity Name<p>{name}</p></div>
                            <div className='card-goal'>Description<p>{description}</p></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Activities;