import React, {useEffect} from 'react';
import driver from '../assets/img/driver.png';
import { Container } from 'reactstrap';

import Button from "@material-ui/core/Button/Button";
import {useSelector, useDispatch} from "react-redux";

import {getUserData} from "../redux/actions/serverActions";
import axiosWithAuth from '../authentication/axiosWithAuth';
import EditProfileForm from "../components/EditProfileForm";


const ProfilePage = ({match, history}) => {
	const {first_name,last_name,email,username,phone_number} = useSelector((state)=>{
		return state.currentUser
	})

	const dispatch = useDispatch()
	const userID = match.params.userID
	useEffect(()=>{
		dispatch(getUserData(userID))
	}, [userID,dispatch])

	const handleRequestRide = (e)=>{
		e.preventDefault();
		
		navigator.geolocation.getCurrentPosition((position)=>{
			const crd = position.coords;
			console.log({username,latitude: String(crd.latitude), longitude: String(crd.longitude)});
			axiosWithAuth()
			.post("/ride/request", {username, phone_number, latitude: String(crd.latitude), longitude: String(crd.longitude)})
			.then((res)=>{
				console.log(res)
				dispatch({type:"RIDE_REQUEST_SUCCESS", payload:res.data})
			})
			.catch((err)=>{
				console.log(err)
			})
		})
			
	}
	const editReviewForm = (e)=>{
		e.preventDefault();
		history.push(`/profile/${userID}/edit`);
	}

	return (
		<>
			<div
				className="page-header clear-filter page-header-small"
				filter-color="blue"
			>
				<Container>
				<div className="photo-container">
					<img alt="..." src={driver}></img>
				</div>
					<Container>
						<label
						 name="first_name"
						>
							First Name: {first_name}
						</label>
					</Container>
					<Container>
						<label
						 name="last_name"
						>
							Last Name: {last_name}
						</label>
					</Container>
					<Container>
						<label
						 name="email"
						>
							Email:{email}
						</label>
					</Container>
					<Container>
						<label
						 name="username"
						>
							UserName:{username}
						</label>
					</Container>
					<Container>
						<label
						 name="phone_number"
						>
							Phone Number: {phone_number}
						</label>
					</Container>
					<Container>
						<Button
						 variant="contained"
						 color="skyblue"
						 onClick={handleRequestRide}
						>
							Request a Ride
						</Button>
					</Container>
					<Container>
						<Button 
						 variant="contained"
						 color="secondary"
						 onClick={editReviewForm}
						>
							Edit Profile
						</Button>
					</Container>
				</Container>
			</div>
			
		</>
	  );
}


export default ProfilePage;