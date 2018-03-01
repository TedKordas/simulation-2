import React, {Component} from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import { updateUsername, updatePassword, updateUserId } from './../../dux/reducer';
import Auth_logo from '../../assets/auth_logo.png';


class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ' ',
            password: ' ',
        }
    }


    loginUser(username) {
        console.log('handle login')
        const body = {
            username: this.props.username,
            password: this.props.password
        }
        axios.post(`/api/get/user`, body)
        .then(res => {
            console.log('logged in')
            this.props.updateUserId(res.data.id)
            this.props.history.push('/dash')
        });
    }

    registerUser() {
        const body = {
            username: this.props.username,
            password: this.props.password
        }
        axios.post(`/api/post/user`, body)
        .then(res => {
            this.props.updateUserId(res.data.id)
            this.props.history.push('/dash')
        });    
    }


    render() {
        const {updateUsername, updatePassword} = this.props;
        return(
            <div className="App">
                <div className="left-color">
                
                </div>
                <div className="right-color">
                
                </div>
                <div className="bg-color">
                    <div className="Img-container">
                        <img src={Auth_logo} alt="" />
                    </div>
                    <div className="user">
                        <h2>Username</h2>
                    </div>
                    <div className="user-inp">    
                        <input className="user-inp" onChange={(e) => updateUsername(e.target.value)}/>
                    </div>
                    <div className="pass">
                        <h2>Password</h2>
                    </div>
                    <div className="pass-inp">
                        <input className="pass-inp" onChange={(e) => updatePassword(e.target.value)}/>
                    </div>
                    <div className="Btn-container">
                        <button className="Lgn-btn" onClick={() => this.loginUser()}>Login</button>
                        <button className="Reg-btn" onClick={() => this.registerUser()}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    const {username, password, userId} = state;
    return {
        username,
        password,
        userId
    }
}

export default connect(mapStatetoProps, {updateUsername, updatePassword, updateUserId})(Auth);