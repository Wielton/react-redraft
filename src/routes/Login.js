import React, {useState} from 'react'
import { Button, Modal} from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Router } from 'react-router-dom';



const LoginPage = () => {
    const cookies = new Cookies();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    // const [authenticated, setAuthenticated] = useState(cookies.get('sessionToken') || false);
    const show = useState(false)
    const handleShow = (show) => {
        show(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleClose = () => {
        show(false)
    }

    const handleLogin = () => {
        
        axios.post(process.env.REACT_APP_PLAYERS_API_KEY+"manager-login",{
            loginEmail: userEmail,
            loginPassword: userPassword
        }).then((response) => {
            console.log(response);
            cookies.set('sessionToken', response.data.sessionToken);
            // setAuthenticated(true);
            Router.navigate('/Draftboard');
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="LoginForm">
        <Button variant="primary" onClick={handleShow}>
        Login
            </Button>
            <form>
                <Modal 
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={show} 
                    onHide={handleClose} 
                    onSubmit={handleSubmit}
                    animation={false}
                    >
                
                <Modal.Header>
                <Modal.Title>Login To reDraft Fantasy Football</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
        </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Modal.Footer>
                
            </Modal>
            </form>
        </div>
        )
}

export default LoginPage;