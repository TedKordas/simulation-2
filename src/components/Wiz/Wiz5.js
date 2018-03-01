import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Wiz.css';
import { updateDesiredRent, addListings } from '../../dux/reducer.js';
import Header_logo from '../../assets/header_logo.png';
import Step_completed from '../../assets/step_completed.png';
import Step_active from '../../assets/step_active.png';


class Wiz5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            properties: [],
            name: ' ',
            description: ' ',
            imgUrl: ' ',
            address: ' ',
            city: ' ',
            states: ' ',
            zip: ' ',
            loanAmount: ' ',
            monthlyMortgage: ' ',
            desiredRent: ' ',
            recomended: 0,
        }
        this.handleComplete = this.handleComplete.bind(this);
    }

    componentDidMount(){
        const recBody = {
            recommendedRent: (this.props.monthlyMortgage * 1) + (25 / 100) * (this.props.recomended * 1)
        }
        console.log(recBody)
    }


    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    handleComplete(req, res, next){
        const house = {
            recomended: (this.props.recomended * 1) + (25 / 100) * (this.props.recomended * 1),
            name: this.props.name,
            description: this.props.description,
            address: this.props.address,
            city: this.props.city,
            states: this.props.states,
            zip: this.props.zip,
            img_url: this.props.imgUrl,
            loan_amount: this.props.loanAmount,
            monthly_mortgage: this.props.monthlyMortgage,
            desired_rent: this.props.desiredRent
        }
        axios.post('/api/post/property', house)
        .then(res => {
            console.log('returning house');
            this.props.addListings(res.data);
        })
        .catch(err => console.log(err)); 
    }

    render() {
        const {updateDesiredRent} = this.props;
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
                <h2 className="step1">Step 5</h2>
                <div className="step-icons">
                    <img src={Step_completed} alt="" />
                    <img src={Step_completed} alt="" />
                    <img src={Step_completed} alt="" />
                    <img src={Step_completed} alt="" />
                    <img src={Step_active} alt="" />
                </div>
                <h3 className="recommend">Recommended Rent ${(this.props.monthlyMortgage * 1) + (25 / 100) * (this.props.monthlyMortgage * 1)}</h3>
                <div style={{width: '70%', margin:'20px 0 0 0'}}>
                    <h2 className="rent-text">Desired Rent</h2>
                    <input className="rent-inpt" onChange={(e) => updateDesiredRent(e.target.value)} />
                </div>
                <div className="wiz-btn-container">
                        <Link to="/wiz3"><button className="previous-btn2">Previous Step</button></Link>
                        <Link to="/dash"><button className="complete-btn" onClick={() => this.handleComplete()}>Complete</button></Link>
                    </div>                
            </div>
        )
    }
}

function mapStatetoProps(state) {
    const {recomended, name, description, address, city, states, zip, imgUrl, loanAmount, monthlyMortgage, desiredRent} = state;
    return {
        recomended, 
        name, 
        description, 
        address, 
        city, 
        states, 
        zip, 
        imgUrl, 
        loanAmount, 
        monthlyMortgage, 
        desiredRent
    }
}

export default connect(mapStatetoProps, {updateDesiredRent, addListings})(Wiz5);