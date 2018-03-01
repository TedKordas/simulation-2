import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Wiz.css';
import { updateImageUrl } from '../../dux/reducer.js';
import Header_logo from '../../assets/header_logo.png';
import Step_completed from '../../assets/step_completed.png';
import Step_active from '../../assets/step_active.png';
import Step_inactive from '../../assets/step_inactive.png';

class Wiz3 extends Component {
    constructor(props) {
        super()

        this.state = {
            imageUrl: ''
        }
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext() {
        console.log('handle next wiz3')
        this.props.history.push('/wiz4')
    }

    render() {
        const {updateImageUrl} = this.props;
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
                <h2 className="step1">Step 3</h2>
                <div className="step-icons">
                    <img src={Step_completed} alt="" />
                    <img src={Step_completed} alt="" />
                    <img src={Step_active} alt="" />
                    <img src={Step_inactive} alt="" />
                    <img src={Step_inactive} alt="" />
                </div>
                <div className='image-holder'>
                        <img style={{maxWidth: '100%', maxHeight: '300px'}} src={this.props.imageUrl} alt='Preview'/>
                </div>
                <div>
                    <h2 className="url-text">Image URL</h2>
                    <input className="url-input" value={this.props.imageUrl} onChange={(e) => updateImageUrl(e.target.value)}/>
                </div>
                <div className="wiz-btn-container">
                        <Link to="/wiz2"><button className="previous-btn">Previous Step</button></Link>
                        <Link to="/wiz4"><button className="next-btn" onClick={() => this.handleNext()}>Next Step</button></Link>
                    </div>                
            </div>
        )
    }
}

function mapStatetoProps(state) {
    const {imageUrl} = state;
    return {
        imageUrl
    }
}

export default connect(mapStatetoProps, {updateImageUrl})(Wiz3);