import { combineReducer } from 'redux';
import { FETCH_RIDER_DATA_START, FETCH_RIDER_DATA_SUCCESS, FETCH_RIDER_DATA_FAILURE } from '../actions/serverActions'


export const initialState = {
    currentUser:{
        firstName : " ",
        lastName: " ",
        email: " ",
        userName: " ",
        isDriver: false,
        phoneNumber: " ",
    },
    selectDriver:{
        firstName:" ",
        lastName: " ",
        phoneNumber: " ",
        price:0,
        reviews: []
    },
};

export const currentUser = (state = initialState.currentUser, action) =>{
    switch(action.type){
        case FETCH_RIDER_DATA_START :
            return{...state, error:""};

        case FETCH_RIDER_DATA_SUCCESS :
            return{...state, error:""};
        
        case FETCH_RIDER_DATA_FAILURE :
            return{...state, error:""};

        default:
            return state;
    }
};

export const mainReducer = (state = initialState, action) =>{
    switch(action.type){
        case " ":
            return{};

        case " ":
            return{};

        default:
            return state;
    }
};