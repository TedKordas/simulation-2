import React, {Component} from 'react';
import {connect} from 'react-redux';
// import { getProperties } from '../../dux/reducer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dash.css';
import Listings from '../Listings/Listings.js';
import Header_logo from '../../assets/header_logo.png';

class Dash extends Component {
    constructor(props) {
        super(props)
        this.state = {
          properties: [],
          val: 0
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.getFilter = this.getFilter.bind(this);
        this.reset = this.reset.bind(this);
      }
    
      componentWillReceiveProps(newProps) {
        console.log('newprops', newProps)
      }
    
      handleFilter(val){
        this.setState({
          filter: val
        })
        console.log(this.state.filter)
      }
    
      getFilter(){
        axios.get(`/api/get/filter/${this.state.filter}`).then(res => {
          this.setState({
            properties: res.data
          })
        })
      }
    
      reset(){
        this.props.getProperties(this.props.user[0].id).then(res => {
          console.log('getprops res', res)
          this.setState({
            properties: res.value,
            val: 0
          })
      })
    }

    render() {
      var propertiesList = this.props.properties.map((property, i) => {
        return <Listings key={i} 
        imageUrl={property.img_url}
        name={property.name}
        description={property.description}
        loanAmount={property.loan_amount}
        monthlyMortgage={property.monthly_mortgage}
        desiredRent={property.desired_rent}
        address={property.address}
        city={property.city}
        states={property.state}
        zip={property.zip}
        />;
      })
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
            <Link to="/wiz"><button className="new-prop-btn">Add new property</button></Link>
            <div className="filter-line">
              <h2 className="filter-text">List properties with "desired rent" greater than: $</h2>
              <input placeholder="0" className="inpt-filter" onChange={(e) => this.handleFilter(e.target.value)}/>
              <button className="filter-btn" value={this.state.val} onClick={() => this.getFilter()}>Filter</button>
              <button className="reset-btn" onClick={() => this.reset()}>Reset</button>
            </div>
            <div className="border">
                    
            </div>
            <div className='home-listings'>
              <span className='home-text'>Home Listings</span>
              {propertiesList}
            </div>
          </div>
        )
    }
}

function mapStatetoProps(state) {
  const {properties} = state;
    return {
      properties
    }
  }
  
  export default connect(mapStatetoProps, {})(Dash);