import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Wiz.css';
import { updateAddress, updateCity, updateState, updateZip } from '../../dux/reducer.js';
import Header_logo from '../../assets/header_logo.png';
import Step_completed from '../../assets/step_completed.png';
import Step_active from '../../assets/step_active.png';
import Step_inactive from '../../assets/step_inactive.png';

class Wiz2 extends Component {
    constructor(props){
        super(props)

        this.state = {
            address: ' ',
            city: ' ',
            states: ' ',
            zip: ' '
        }

        this.handleNext = this.handleNext.bind(this)
    }

    handleNext() {
        console.log('handle next')
        this.props.history.push('/wiz3')
    }

    render() {
        const { updateAddress, updateCity, updateState, updateZip } = this.props;
        return(
            <div className="App">
                <div className="Header">
                    <img className="img" src={Header_logo} alt=""/> 
                    <h1 className="h1">Houser</h1>
                    <h1 className="h2">Dashboard</h1>
                    <Link to="/"><h3 className="h3">Logout</h3></Link>
                </div>
                <div className="left-color2">
                
                </div>
                <div className="right-color2">
                
                </div>
                <div className="add-cancel">
                    <h2 className="Add-text">Add new listing</h2>
                    <Link to="/dash"><button className="cancel-btn">Cancel</button></Link>
                </div>
                <h2 className="step1">Step 2</h2>
                <div className="step-icons">
                    <img src={Step_completed} alt="" />
                    <img src={Step_active} alt="" />
                    <img src={Step_inactive} alt="" />
                    <img src={Step_inactive} alt="" />
                    <img src={Step_inactive} alt="" />
                </div>
                <div style={{width: '70%'}}>
                    <h2 className="address-text">Address</h2>
                    <input className="address-inpt" value={this.props.address} onChange={(e) => updateAddress(e.target.value)}/>
                </div>
                <div className="city-state">
                    <h2 className="city-text">City</h2>
                    <h2 className="state-text">State</h2>
                </div>
                <div className="city-state-inpt">
                    <input className="city-inpt" value={this.props.city} onChange={(e) => updateCity(e.target.value)}/>
                    <input className="state-inpt" value={this.props.state} onChange={(e) => updateState(e.target.value)}/>
                </div>
                <div>
                    <h2 className="zip-text">Zip</h2>
                    <input className="zip-inpt" value={this.props.zip} onChange={(e) => updateZip(e.target.value)}/>
                </div>
                <div className="wiz-btn-container">
                        <Link to="/wiz"><button className="previous-btn">Previous Step</button></Link>
                        <Link to="/wiz3"><button className="next-btn" onClick={() => this.handleNext()}>Next Step</button></Link>
                    </div>                
            </div>
        )
    }
}

function mapStatetoProps(state) {
    const {address, city, states, zip} = state;
    return {
        address,
        city,
        states,
        zip
    }
}

export default connect(mapStatetoProps, {updateAddress, updateCity, updateState, updateZip})(Wiz2);