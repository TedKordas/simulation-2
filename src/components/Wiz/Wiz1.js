import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Wiz.css';
import { updatePropertyName, updatePropertyDescription } from '../../dux/reducer.js';
import Header_logo from '../../assets/header_logo.png';
import Step_active from '../../assets/step_active.png';
import Step_inactive from '../../assets/step_inactive.png';

class Wiz1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // userId: ' ',
            name: ' ',
            description: ' '
        }
        this.handleNext = this.handleNext.bind(this);
    }


    handleNext() {
        console.log('handle next')
        this.props.history.push('/wiz2')
    }

    render() {
        const {updatePropertyName, updatePropertyDescription} = this.props;
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
                <h2 className="step1">Step 1</h2>
                <div className="step-icons">
                    <img src={Step_active} alt="" />
                    <img src={Step_inactive} alt="" />
                    <img src={Step_inactive} alt="" />
                    <img src={Step_inactive} alt="" />
                    <img src={Step_inactive} alt="" />
                </div>
                <div className="name">
                    <h3 className="P-name">Property Name</h3>
                    <input className="name-inpt" value={this.props.name} onChange={(e) => updatePropertyName(e.target.value)} />
                </div>
                <div className="description">
                    <h3 className="P-desc">Property Description</h3>
                    <textarea className="desc-inpt" value={this.props.description} onChange={(e) => updatePropertyDescription(e.target.value)} />
                </div>
                <Link to="/wiz2"><button className="nxt-stp1" onClick={() => this.handleNext()}>Next Step</button></Link>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    const {name, description} = state;
    return {
        name,
        description
    }
}

export default connect(mapStatetoProps, {updatePropertyName, updatePropertyDescription})(Wiz1);