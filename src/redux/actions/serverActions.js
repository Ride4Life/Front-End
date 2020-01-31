import axios from 'axios';

//All Ride Requester Actions
export const FETCH_RIDER_DATA_START = "FETCH_RIDER_DATA_START";
export const FETCH_RIDER_DATA_SUCCESS = "FETCH_RIDER_DATA_SUCCESS";
export const FETCH_RIDER_DATA_FAILURE = "FETCH_RIDER_DATA_FAILURE";

export const POST_RIDER_DATA_START = "POST_RIDER_DATA_START";
export const POST_RIDER_DATA_SUCCESS = "POST_RIDER_DATA_SUCCESS";
export const POST_RIDER_DATA_FAILURE = "POST_RIDER_DATA_FAILURE";

export const DELETE_RIDER_DATA_START = "DELETE_RIDER_DATA_START";
export const DELETE_RIDER_DATA_SUCCESS = "DELETE_RIDER_DATA_SUCCESS";
export const DELETE_RIDER_DATA_FAILURE = "DELETE_RIDER_DATA_FAILURE";

export const DELETE_RIDER_ACCOUNT = "DELETE_RIDER_ACCOUNT";

//Driver Actions
export const FETCH_DRIVER_DATA_START = "FETCH_DRIVER_DATA_START";
export const FETCH_DRIVER_DATA_SUCCESS = "FETCH_DRIVER_DATA_SUCCESS";
export const FETCH_DRIVER_DATA_FAILURE = "FETCH_DRIVER_DATA_FAILURE";

export const POST_DRIVER_DATA_START = "POST_DRIVER_DATA_START";
export const POST_DRIVER_DATA_SUCCESS = "POST_DRIVER_DATA_SUCCESS";
export const POST_DRIVER_DATA_FAILURE = "POST_DRIVER_DATA_FAILURE";

export const DELETE_DRIVER_DATA_START = "DELETE_DRIVER_DATA_START";
export const DELETE_DRIVER_DATA_SUCCESS = "DELETE_DRIVER_DATA_SUCCESS";
export const DELETE_DRIVER_DATA_FAILURE = "DELETE_DRIVER_DATA_FAILURE";

export const DELETE_DRIVER_ACCOUNT = "DELETE_RIDER_ACCOUNT";

//Editing Actions

export const rideRequester = newRideRequester => dispatch =>{
    dispatch({ type: FETCH_RIDER_DATA_START});
    axios
        .get(" ")
        .then((res) =>{
            dispatch({type:FETCH_RIDER_DATA_SUCCESS, payload: res.data});
        })
        .catch((err)=>{
            dispatch({type:FETCH_RIDER_DATA_FAILURE}, payload:`${err.response.data} ${err.response.data}`)
        });

}