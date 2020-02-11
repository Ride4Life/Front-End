import React, {useEffect} from 'react';
import driver from '../assets/img/driver.png';
import { Container } from 'reactstrap';

import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom"

import {useSelector, useDispatch} from "react-redux";

import {getUserData} from "../redux/actions/serverActions";
import axiosWithAuth from '../authentication/axiosWithAuth';



const ProfilePage = ({match}) => {
	const {first_name,last_name,email,username,phone_number} = useSelector((state)=>{
		return state.currentUser
	})

	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getUserData(match.params.userID))
	}, [getUserData])

	const handleRequestRide = (e)=>{
		e.preventDefault();
		
		navigator.geolocation.getCurrentPosition((position)=>{
			const crd = position.coords;
			console.log({username, latitude: String(crd.latitude), longitude: String(crd.longitude)});
			axiosWithAuth()
			.post("/ride/request", {username, latitude: String(crd.latitude), longitude: String(crd.longitude)})
			.then((res)=>{
				console.log(res)
				dispatch({type:"RIDE_REQUEST_SUCCESS", payload:res.data})
			})
			.catch((err)=>{
				console.log(err)
			})
		})

		
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
						<Button variant="contained" color="primary"
						 onClick={handleRequestRide}
						>
							Request a Ride
						</Button>
					</Container>
					<Container>
						<Link to={`/edit-profile`}>
							<Button variant="contained" color="secondary">Edit Profile</Button>
						</Link>
					</Container>
				</Container>
			</div>
			
		</>
	  );
}


export default ProfilePage;