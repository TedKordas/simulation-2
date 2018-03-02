// import axios from 'axios';
// import { browserHistory } from 'react-router';

let initialState = {
    properties: [],
    username: " ",
    password: " ",
    userId: 0,
    name: " ",
    description: " ",
    imageUrl: " ",
    address: " ",
    city: " ",
    states: " ",
    zip: " ",
    loanAmount: " ",
    monthlyMortgage: " ",
    desiredRent: " ",
    recomended: " ",
};

const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_USERID = "UPDATE_USERID";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_PROPERTYNAME = 'UPDATE_PROPERTYNAME';
const UPDATE_PROPERTYDESCRIPTION = 'UPDATE_PROPERTYDESCRIPTION';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMAGEURL = "UPDATE_IMAGEURL";
const UPDATE_LOANAMOUNT = "UPDATE_LOANAMOUNT";
const UPDATE_MONTHLYMORTGAGE = "UPDATE_MONTHLYMORTGAGE";
const UPDATE_DESIREDRENT = "UPDATE_DESIREDRENT";

const GET_PROPERTIES = 'GET_PROPERTIES';
const ADD_PROPERTIES = "ADD_PROPERTIES";




export function updateUsername(username) {
    return {
      type: UPDATE_USERNAME,
      payload: username
    };
  }

  export function updateUserId(userId) {
    return {
      type: UPDATE_USERID,
      payload: userId
    };
  }

  export function updatePassword(password) {
    return {
      type: UPDATE_PASSWORD,
      payload: password
    };
  }

export function addListings(properties){
    return{
      type: ADD_PROPERTIES,
      payload: properties
    }
  }

export function updatePropertyName(name) {
    return {
      type: UPDATE_PROPERTYNAME,
      payload: name
    };
  }
  
  export function updatePropertyDescription(description) {
    return {
      type: UPDATE_PROPERTYDESCRIPTION,
      payload: description
    };
  }

  export function updateAddress(address) {
    return {
      type: UPDATE_ADDRESS,
      payload: address
    };
  }
  
  export function updateCity(city) {
    return {
      type: UPDATE_CITY,
      payload: city
    };
  }
  
  export function updateState(states) {
    return {
      type: UPDATE_STATE,
      payload: states
    };
  }
  
  export function updateZip(zip) {
    return {
      type: UPDATE_ZIP,
      payload: zip
    };
  }

  export function updateImageUrl(imageUrl) {
    return {
      type: UPDATE_IMAGEURL,
      payload: imageUrl
    };
  }

  export function updateLoanAmount(loanAmount) {
    return {
      type: UPDATE_LOANAMOUNT,
      payload: loanAmount
    };
  }
  
  export function updateMonthlyMortgage(monthlyMortgage) {
    return {
      type: UPDATE_MONTHLYMORTGAGE,
      payload: monthlyMortgage
    };
  }

  export function updateDesiredRent(desiredRent) {
    return {
      type: UPDATE_DESIREDRENT,
      payload: desiredRent
    };
  }


export default function (state = initialState, action) {
    console.log('reducer', action)
    var {payload, type} = action;
    switch (type) {
        case ADD_PROPERTIES:
        console.log('hitting dux bb')
            return Object.assign({}, state, { properties: payload });
        case UPDATE_USERNAME:
            return Object.assign({}, state, { username: payload });
        case UPDATE_USERID:
            return Object.assign({}, state, { userId: payload });
        case UPDATE_PASSWORD:
            return Object.assign({}, state, { password: payload });
        case UPDATE_PROPERTYNAME:
            return Object.assign({}, state, { name: payload });
        case UPDATE_PROPERTYDESCRIPTION:
            return Object.assign({}, state, { description: payload });
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: payload });
        case UPDATE_CITY:
            return Object.assign({}, state, { city: payload });
        case UPDATE_STATE:
            return Object.assign({}, state, { states: payload });
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: payload });
        case UPDATE_IMAGEURL:
            return Object.assign({}, state, { imageUrl: payload });
        case UPDATE_LOANAMOUNT:
            return Object.assign({}, state, { loanAmount: payload });
        case UPDATE_MONTHLYMORTGAGE:
            return Object.assign({}, state, { monthlyMortgage: payload });
        case GET_PROPERTIES:
            return Object.assign({}, state, { properties: action.payload })
        case UPDATE_DESIREDRENT:
            return Object.assign({}, state, { desiredRent: payload });
        default:
            return state;
    }
}