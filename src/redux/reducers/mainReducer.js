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
    error: "", 
    isLoggedIn: false
};

export const currentUser = (state = initialState.currentUser, action) =>{
    switch(action.type){
        case " ":
            return{...state, 
                    error:"",
                    isLoggedIn:false, 
                    currentUser: {
                        firstName: action.payload.firstName,
                        lastName:action.payload.lastName
                    },
            };
        case " ":
            return{...state, error:"", };

        default:
            return state;
    }
};

console.log(currentUser)

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