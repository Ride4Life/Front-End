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