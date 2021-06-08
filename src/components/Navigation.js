
import { Link } from "react-router-dom";
import {
    ACTIVITIES_ROUTE,
    MY_ROUTINES_ROUTE,
    ROUTINES_ROUTE,
    CREATE_ROUTINE_ROUTE,
    REGISTER_ROUTE,
    LOGIN_ROUTE,
    CREATE_ACTIVITY_ROUTE,
    HOME_ROUTE
} from "../constants";
import { clearCurrentUser } from '../auth'


const Navigation = ({ currentUser,
    setCurrentUser }) => {
    const myToken = JSON.parse(localStorage.getItem('token'));
    // const [myUsername, setMyUsername] = useState('')
    const handleLogout = (event) => {
        clearCurrentUser()

    }



    if (myToken) {
        return (


            <nav>
                <div className="topnav">

                    <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
                    <Link to={ROUTINES_ROUTE}>Routines</Link>
                    <Link to={CREATE_ROUTINE_ROUTE}>Create Routine</Link>
                    <Link to={ACTIVITIES_ROUTE}>Activities</Link>
                    <Link to={CREATE_ACTIVITY_ROUTE}>Create Activities</Link>
                    <Link to={HOME_ROUTE} onClick={handleLogout}>Logout</Link>

                </div>

            </nav>


        );

    } else {
        return (

            <nav>
                <div className="topnav">
                    <Link to={HOME_ROUTE}>Home</Link>
                    <Link to={ROUTINES_ROUTE}>Routines</Link>
                    <Link to={ACTIVITIES_ROUTE}>Activities</Link>
                    <Link to={REGISTER_ROUTE}>Register</Link>
                    <Link to={LOGIN_ROUTE}>Login</Link>
                </div>
            </nav>


        );
    }

};

export default Navigation;