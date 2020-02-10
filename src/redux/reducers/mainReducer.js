import {
    //Getting User Data
    GET_USER_DATA_START,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,

    //Posting New user Data
    POST_USER_DATA_START,
    POST_USER_DATA_SUCCESS,
    POST_USER_DATA_FAILURE,

    //Updating User data
    PUT_USER_DATA_START,
    PUT_USER_DATA_SUCCESS,
    PUT_USER_DATA_FAILURE,

    //deleting user account
    DELETE_USER_DATA_START,
    DELETE_USER_DATA_SUCCESS,
    DELETE_USER_DATA_FAILURE
} from "../actions/serverActions";

const initialState = {
    error: "", 
    isFetching: false,
    currentUser:{
        id :" ",
        first_name : " ",
        last_name: " ",
        email: " ",
        username:" ",
        isDriver: false,
        phone_number: " "   
    }
    
};

export const mainReducer = (state = initialState, action) =>{
    switch(action.type){
    //Getting user data cases
        case GET_USER_DATA_START:
            return{
                ...state, 
                error:"",
                isFetching:true
            };
        case GET_USER_DATA_SUCCESS:
            return{
                ...state, 
                error:"",
                isFetching:false, 
                currentUser: action.payload
            };
        case GET_USER_DATA_FAILURE:
            return{
                ...state, 
                error:action.payload,
                isFetching:false
            };
    //Posting user Data
        case POST_USER_DATA_START:
            return{
                ...state,
                isFetching:true
            };
        case POST_USER_DATA_SUCCESS:
            return{
                ...state,
                error:" ",
                isFetching:false,
                currentUser: action.payload
            };
        case POST_USER_DATA_FAILURE:
            return{
                ...state,
                error:action.payload,
                isFetching:false
            };
    //Updating User Data
        case PUT_USER_DATA_START:
            return{
                ...state,
                error:" ",
                isFetching:true,
            };
        case PUT_USER_DATA_SUCCESS:
            return{
                ...state,
                error:"",
                isFetching:false,
                currentUser:action.payload
            };
        case PUT_USER_DATA_FAILURE:
            return{
                ...state,
                error:action.payload,
                isFetching:false
            };
    //Deleting User Data
        case DELETE_USER_DATA_START:
            return{
                ...state,
                error:"",
                isFetching:true
            }
        case DELETE_USER_DATA_SUCCESS:
            return{
                ...state,
                isFetching:false,
                currentUser:action.payload
            }
        case DELETE_USER_DATA_FAILURE:
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }       
        default:
            return state;
    }
};