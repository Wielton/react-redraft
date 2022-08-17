import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import Cookies from 'universal-cookie';

//  This Hook will check the cookie status upon initial landing onto site and when user navigates to protected pages

// This hook is preventing the element from rendering and instead re-routes to the login page.  Change this to a '404 error'

const PrivateRoute = ({ children }) => {
    //  Get sessionToken => cookies.get('sessionToken')
    //  If token exists => return isAuthorized(true)
    //  If no token => return isAuthorized(false)

    //  Initialize Cookies
    const cookies = new Cookies();
    
    //  Initialize isAuthorized state as null

    //  I think this following state: useState(cookies.get('sessionToken')) is causing an update loop
    //  when no sessionToken is found so initial state has to be 'null' or 'false'
    const [isAuthorized, setAuthorized] = useState(null);
    if (!isAuthorized) {
        return <Navigate to="/404error" />;
    } else {
        return children;
    }

}
export default PrivateRoute; 