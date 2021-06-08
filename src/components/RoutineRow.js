import React, { useState, useEffect } from "react";
import { getActivities } from '../api'

import {
    Create as CreateIcon,
    Save as SaveIcon,
    Delete as DeleteIcon,
} from "@material-ui/icons";

const BASE = 'https://fitnesstrac-kr.herokuapp.com/api/'

const RoutineRow = ({
    routine: { id, name, goal, creatorName, isPublic },
    onRemoveRoutine,
}) => {
    const myToken = JSON.parse(localStorage.getItem("token"));
    const [routineName, setRoutineName] = useState(name);
    const [routineGoal, setRoutineGoal] = useState(goal);
    const [editMode, setEditMode] = useState(false);
    const [activitiesList, setActivitiesList] = useState([]);
    const [anActivity, setAnActivity] = useState('Any');







    useEffect(() => {
        getActivities()
            .then((activitiesList) => {
                setActivitiesList(activitiesList);
                console.log(activitiesList);

            })
            .catch((error) => {
                console.error(error);
            });

    }, [setActivitiesList]);

    const onEdit = () => {
        setEditMode(true);
    };

    const onSave = (id) => {
        setEditMode(false);
        fetch(
            `${BASE}routines/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${myToken}`,
                },
                body: JSON.stringify({
                    name: routineName,
                    goal: routineGoal,
                }),
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log(result, 'my result');
            })
            .catch(console.error);
    };

    const onDelete = (id) => {
        onRemoveRoutine();
        fetch(
            `${BASE}routines/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${myToken}`,
                },
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch(console.error);
    };

    const HandleFormSubmit = (event) => {
        event.preventDefault();
        setAnActivity(event.target.value)


    }

    return (
        <div className="routine-cards" key={id}>
            <div className='card'>

                {editMode ? (
                    <>
                        <label><p className="card-name">Routine Name</p></label>
                        <input
                            value={routineName}
                            onChange={(event) => {
                                setRoutineName(event.target.value);
                            }}
                        />
                    </>
                ) : (
                    <>
                        <label><p className="card-name">Routine Name</p></label>
                        {routineName}
                    </>
                )}
                <br />
                <div >
                    {editMode ? (
                        <>
                            <label><p className="card-goal">Routine Goal</p></label>
                            <input
                                value={routineGoal}
                                onChange={(event) => {
                                    setRoutineGoal(event.target.value);
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <label><p className="card-goal">Routine Goal</p></label>
                            {routineGoal}
                        </>
                    )}
                </div>
                <br />
                <div >
                    Creator Name:
                    <p className="card-goal"> {creatorName}</p></div>
                <br />
                <div className='icon-container'>
                    <div  >
                        {editMode ? (
                            <SaveIcon
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    onSave(id);
                                }}
                            />
                        ) : (
                            <CreateIcon style={{ cursor: "pointer" }} onClick={onEdit} />
                        )}
                    </div>
                    <div >
                        <DeleteIcon
                            onClick={() => {
                                onDelete(id);
                            }}
                        />
                    </div>
                </div>
                <fieldset>
                    <label htmlFor="select-century">
                        <p className='drop-down-label'>Activity List{" "}</p>
                    </label>
                    <select
                        value={anActivity}

                        onChange={HandleFormSubmit}
                    >
                        <option value="Any">Any</option>
                        {activitiesList.map(({ id, name, description, duration, count, routineActivityId, routineId }) => (

                            <option
                                key={`${id}+${name}`}
                                value={`${id} ${name}`}
                                data-tag={id}
                                id={id}
                            >
                                {name}, {id}
                            </option>



                        ))}
                    </select>
                </fieldset>
            </div>
        </div>

    );
};

export default RoutineRow;