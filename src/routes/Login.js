import React, {useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import '../styling/LoginForm.css'

// Handle login and logout
// Upon successful login, a 'sessionToken' is set for global retrieval
// Create an authentication function that will retrieve the 'sessionToken' cookie
//   - this function has kind of been created in the Authent.js file. 
//   - Do I use this file for all authentication or a seperate file?

const LoginPage = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    const handleLogin = () => {
        
        axios.post(process.env.REACT_APP_PLAYERS_API_KEY+"manager-login",{
            loginEmail: userEmail,
            loginPassword: userPassword
        }).then((response) => {
            console.log(response);
            cookies.set('sessionToken', response.data.sessionToken);
            navigate('/RosterPortal');
        }).catch((error) => {
            console.log(error);
        })
    }
    
    return (
        <div>
        
                <form 
                    className="login-form"
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    onSubmit={handleSubmit}
                    >
                
                <div>
                <div>Login To reDraft Fantasy Football</div>
                </div>
                <div>
                <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    id="email"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="text" 
                    name="password" 
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    id="password"
                />
            </div>
        </div>
            <div>
                
                <button variant="primary" onClick={handleLogin}>
                    Login
                </button>
            </div>
                
            </form>
        </div>
        )
}

export default LoginPage;