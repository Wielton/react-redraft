import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
import axios from 'axios';
import { Router } from 'react-router-dom';

class LoginForm extends Component {
        constructor(props) {
            super(props);
            this.loginEmail = this.state.loginEmail;
            this.loginPassword = this.state.loginPassword;
            this.handleClose = this.handleClose.bind(this);
            this.handleShow = this.handleShow.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleLogin = this.handleLogin.bind(this);
        }
        handleShow(){
            this.setState({show: true})
        }
        handleClose(){
            this.setState({show: false});
        }
        handleSubmit(e){
            e.preventDefault();
            
        }
        handleLogin(loginEmail, loginPassword){
            axios.request({
                url : process.env.REACT_APP_PLAYERS_API_KEY+"manager-login",
                method : "POST",
                data : {
                    loginEmail,
                    loginPassword
                }
            }).then(response=>{
                console.log(response);
                Router.push('/DraftBoard');
                this.setState({loginEmail: "", loginPassword: ""})
            }).catch((error)=>{
                console.log(error);
            })
            
            // set state with that data
        }
        handleChange(e){
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    render() { 
        return (
            <div className="LoginForm">
            <Button variant="primary" onClick={this.handleShow}>
            Login
                </Button>
                <form>
                <Modal 
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.state.show} 
                    onHide={this.handleClose} 
                    onSubmit={this.handleSubmit}
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
                        value={this.state.loginEmail}
                        onChange={this.handleChange}
                        id="email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        value={this.state.loginPassword}
                        onChange={this.handleChange}
                        id="password"
                    />
                </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleLogin}>
                        Login
                    </Button>
                    </Modal.Footer>
                    
                </Modal>
                </form>
            </div>
        );
    }
}

export default LoginForm;