import axiosWithAuth from '../../authentication/axiosWithAuth';
import thunk from "redux-thunk";

//Action Types
export const GET_USER_DATA_START =  "GET_USER_DATA_START";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";

export const POST_USER_DATA_START =   "POST_USER_DATA_START";
export const POST_USER_DATA_SUCCESS = "POST_USER_DATA_SUCCESS";
export const POST_USER_DATA_FAILURE = "POST_USER_DATA_FAILURE";

export const PUT_USER_DATA_START =   "PUT_USER_DATA_START";
export const PUT_USER_DATA_SUCCESS = "PUT_USER_DATA_SUCCESS";
export const PUT_USER_DATA_FAILURE = "PUT_USER_DATA_FAILURE";

export const DELETE_USER_DATA_START =      "DELETE_USER_DATA_START";
export const DELETE_USER_DATA_SUCCESS =    "DELETE_USER_DATA_SUCCESS";
export const DELETE_USER_DATA_FAILURE =    "DELETE_USER_DATA_FAILURE";
//Action Types



//Actual Actions
export const getUserData = (userID) => dispatch => {
    dispatch({type: GET_USER_DATA_START});
    axiosWithAuth()
        .get(`/profile/${userID}`)
        .then((res) => {
            console.log("getUserData", res.data)
            dispatch({type:GET_USER_DATA_SUCCESS, payload: res.data});
        })
        .catch((err)=>{
            dispatch({type:GET_USER_DATA_FAILURE, payload: `${err.response}`});
        })
}

//Post new user data to Server  
export const postUserData = () => dispatch => {
    dispatch({
        type: POST_USER_DATA_START});
        axiosWithAuth()
            .post("/auth/signup")
            .then((res) => {
                dispatch({type:POST_USER_DATA_SUCCESS, payload: res.data});
            })
            .catch((err)=>{
                dispatch({type:POST_USER_DATA_FAILURE, payload: `${err.response}`});
            })
      
}

//PUT new user data to Server  
export const putUserData = (userID) => dispatch => {
    dispatch({
        type: PUT_USER_DATA_START});
        axiosWithAuth()
            .post(`/profile/${userID}`)
            .then((res) => {
                dispatch({type:PUT_USER_DATA_SUCCESS, payload: res.data});
            })
            .catch((err)=>{
                dispatch({type:PUT_USER_DATA_FAILURE, payload: `${err.response}`});
            })
      
}


//Delete user profile 
export const deleteUserData = (userID) => dispatch => {
    dispatch({
        type: DELETE_USER_DATA_START});
        axiosWithAuth()
            .delete(`/profile/${userID}`)
            .then((res) => {
                dispatch({type:DELETE_USER_DATA_SUCCESS, payload: res.data});
            })
            .catch((err)=>{
                dispatch({type:DELETE_USER_DATA_FAILURE, payload: `${err.response}`});
            })
      
}



