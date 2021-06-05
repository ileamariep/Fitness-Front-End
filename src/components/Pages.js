import React from 'react';

import { Route } from "react-router-dom";
import {
    ACTIVITIES_ROUTE,
    HOME_ROUTE,
    ROUTINES_ROUTE,
    MY_ROUTINES_ROUTE,
    CREATE_ROUTINE_ROUTE,
    REGISTER_ROUTE,
    LOGIN_ROUTE,
    CREATE_ACTIVITY_ROUTE
} from "../constants";
import Activities from './Activities';
import CreateActivity from './CreateActivity';
import CreateRoutine from './CreateRoutine';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Routines from './Routines';
import MyRoutines from './MyRoutines';

const Pages = (props) => {

    const {
        routines, setRoutines, activityList,
        setActivityList, aRoutine, setSingleRoutine, currentUser, setCurrentUser } = props




    return (
        <>
            <Route path={HOME_ROUTE}>
                <Home />
            </Route>
            <Route path={ROUTINES_ROUTE}>
                <Routines
                    routines={routines}
                    setRoutines={setRoutines} />
            </Route>
            <Route path={MY_ROUTINES_ROUTE}>
                <MyRoutines />

            </Route>
            <Route path={ACTIVITIES_ROUTE}>
                <Activities
                    activityList={activityList}
                    setActivityList={setActivityList} />
            </Route>
            <Route path={CREATE_ROUTINE_ROUTE}>
                <CreateRoutine
                    aRoutine={aRoutine}
                    setSingleRoutine={setSingleRoutine}
                />
            </Route>
            <Route path={REGISTER_ROUTE}>
                <Register
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser} />
            </Route>
            <Route path={LOGIN_ROUTE}>
                <Login
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser} />
            </Route>
            <Route path={CREATE_ACTIVITY_ROUTE}>
                <CreateActivity />
            </Route>

        </>
    );
};

export default Pages;