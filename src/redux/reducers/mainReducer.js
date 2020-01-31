import { combineReducer } from 'redux';

export const initialState = {
    currentUser:{
        firstName : " ",
        lastName: " ",
        email: " ",
        userName: " ",
        isDriver: false,
        phoneNumber: " ",
        address: " "
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
        case " ":
            return{};

        case " ":
            return{};

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