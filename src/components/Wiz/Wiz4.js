import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Wiz.css';
import { updateLoanAmount, updateMonthlyMortgage } from '../../dux/reducer.js';
import Header_logo from '../../assets/header_logo.png';
import Step_completed from '../../assets/step_completed.png';
import Step_active from '../../assets/step_active.png';
import Step_inactive from '../../assets/step_inactive.png';

class Wiz4 extends Component {
    constructor(props){
        super(props)

        this.state = {
            loanAmount: '',
            monthlyMortgage: ''
        }
        this.handleNext = this.handleNext.bind(this);
    }

    componentDidMount(){
        console.log(this.props.properties)
    }


    handleNext(){
        this.props.history.push('/wiz5')
    }


    render() {
        const {updateLoanAmount, updateMonthlyMortgage} = this.props;
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
                <h2 className="step1">Step 4</h2>
                <div className="step-icons">
                    <img src={Step_completed} alt="" />
                    <img src={Step_completed} alt="" />
                    <img src={Step_completed} alt="" />
                    <img src={Step_active} alt="" />
                    <img src={Step_inactive} alt="" />
                </div>
                <div>
                    <h2 className="loan-text" style={{width: '70%'}}>Loan Amount</h2>
                    <input className="loan-inpt" value={this.props.loanAmount} onChange={(e) => updateLoanAmount(e.target.value)} />
                </div>
                <div>
                    <h2 className="mortgage-text" style={{width: '70%', margin:'20px 0 0 0'}}>Monthly Mortgage</h2>
                    <input className="mortgage-inpt" value={this.props.monthlyMortgage} onChange={(e) => updateMonthlyMortgage(e.target.value)} />
                </div>
                <div className="wiz-btn-container">
                        <Link to="/wiz3"><button className="previous-btn">Previous Step</button></Link>
                        <Link to="/wiz5"><button className="next-btn" onClick={() => this.handleNext()}>Next Step</button></Link>
                    </div>                
            </div>
        )
    }
}

function mapStatetoProps(state) {
    const {loanAmount, monthlyMortgage} = state;
    return {
        loanAmount,
        monthlyMortgage 
    }
}

export default connect(mapStatetoProps, {updateLoanAmount, updateMonthlyMortgage})(Wiz4);