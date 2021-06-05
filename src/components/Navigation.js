
import { Link } from "react-router-dom";
import {
    ACTIVITIES_ROUTE,
    MY_ROUTINES_ROUTE,
    ROUTINES_ROUTE,
    CREATE_ROUTINE_ROUTE,
    REGISTER_ROUTE,
    LOGIN_ROUTE,
    CREATE_ACTIVITY_ROUTE
} from "../constants";
import { clearCurrentUser } from '../auth'

const Navigation = ({ currentUser,
    setCurrentUser }) => {

    const handleLogout = (event) => {
        clearCurrentUser()
        setCurrentUser(false)
        console.log(currentUser, 'this should be false')

    }
    return (

        <nav>
            <div className="topnav">


                <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
                <Link to={ROUTINES_ROUTE}>Routines</Link>
                <Link to={CREATE_ROUTINE_ROUTE}>Create Routine</Link>
                <Link to={ACTIVITIES_ROUTE}>Activities</Link>
                <Link to={CREATE_ACTIVITY_ROUTE}>Create Activities</Link>
                <Link to={REGISTER_ROUTE}>Register</Link>
                <Link to={LOGIN_ROUTE}>Login</Link>
                <button onClick={handleLogout}>Logout</button>



            </div>

        </nav>


    );
};

export default Navigation;