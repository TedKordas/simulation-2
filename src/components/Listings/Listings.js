import React, {Component} from "react";
import './Listings.css';

class Listings extends Component {
    render() {
        return(
            <div className="listingContainer">
                <div className="imgContainer">
                    <img className="imgContainer" src={`${this.props.imageUrl}`} alt="" />
                </div>
                <div className="nameDescriptionContainer">
                    <div>{`${this.props.name}`}</div>
                        <div>{`${this.props.description}`}</div>
                    </div>
                    <div className="detailsContainer">
                    <div className='detail'>{`Loan: $ ${this.props.loanAmount ? this.props.loanAmount:""}`}</div>
                    <div className='detail'>{`Monthly Mortgage: $ ${this.props.monthlyMortgage ? this.props.monthlyMortgage:""}`}</div>
                    <div className='detail'>{`Recommended Rent: $ ${this.props.recomended ? this.props.recomended:""}`}</div>
                    <div className='detail'>{`Desired Rent: $ ${this.props.desiredRent ? this.props.desiredRent:""}`}</div>
                    <div className='detail'>{`Address: ${this.props.address ? this.props.address: ""}`}</div>
                    <div className='detail'>{`City: ${this.props.city ? this.props.city: ""}`}</div>
                    <div className='detail'>{`State: ${this.props.states ? this.props.states: ""}`}</div>
                    <div className='detail'>{`Zip: ${this.props.zip ? this.props.zip: ""}`}</div>
                </div>
            </div>
        )
    }
}

export default Listings;