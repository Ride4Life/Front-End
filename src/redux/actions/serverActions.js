import axiosWithAuth from '../../authentication/axiosWithAuth';

//User Actions
export const GET_USER_DATA_START = "GET_USER_DATA_START";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";

export const POST_USER_DATA_START =   "POST_USER_DATA_START";
export const POST_USER_DATA_SUCCESS = "POST_USER_DATA_SUCCESS";
export const POST_USER_DATA_FAILURE = "POST_USER_DATA_FAILURE";

export const PUT_USER_DATA_START =   "PUT_USER_DATA_START";
export const PUT_USER_DATA_SUCCESS = "PUT_USER_DATA_SUCCESS";
export const PUT_USER_DATA_FAILURE = "PUT_USER_DATA_FAILURE";

export const DELETE_USER_DATA_START =      "DELETE_USER_DATA_START";
export const DELETE_USER_DATA_SUCCESS =    "DELETE_USER_DATA_SUCCESS";
export const DELETE_USER_DATA_FAILURE =    "DELETE_USER_DATA_FAILURE";




//Get User Data from Server
export const getUserDataData = () => dispatch => {
    dispatch({type: GET_USER_DATA_START});
    axiosWithAuth()
        .get(`/api/profile/${userid}`)
        .then((res) => {
            dispatch({type:GET_USER_DATA_SUCCESS, payload: res.data});
        })
        .catch((err)=>{
            dispatch({type:GET_USER_DATA_FAILURE, payload: `${err.response}`});
        })
}

//Post new user data to Server  
export const postUserData = () => dispatch => {
    dispatch({type: POST_USER_DATA_START});
    axiosWithAuth()
        .post("/api/auth/signup")
        .then((res) => {
            dispatch({type:POST_USER_DATA_SUCCESS, payload: res.data});
        })
        .catch((err)=>{
            dispatch({type:POST_USER_DATA_FAILURE, payload: `${err.response}`});
        })
}


//Delete user profile 
export const deleteUserData = () => dispatch => {
    dispatch({type: DELETE_DRIVER_ACCOUNT});
    axiosWithAuth()
        .delete(`/api/profile/${userid}`)
        .then((res) => {
            dispatch({type:DELETE_USER_DATA_SUCCESS, payload: res.data});
        })
        .catch((err)=>{
            dispatch({type:DELETE_USER_DATA_FAILURE, payload: `${err.response}`});
        })
}
