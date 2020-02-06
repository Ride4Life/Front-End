

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import PhoneIcon from '@material-ui/icons/Phone';
import Share from "@material-ui/icons/Share";
import Edit from "@material-ui/icons/Edit";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Loader from 'react-loader-spinner'
import Clear from  "@material-ui/icons/Clear";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles();


class DriverProfilePage extends Component {
	state = {
		isEditing: false,
		activeId: null,
		showEstimate:false,
		driver:null,
		trip:{}
	}
	
	editProfile = ()=>{
		this.setState({isEditing: !this.state.isEditing})
	}
	
	changeHandler = (e) => {
		this.setState({
			profileBody: e.target.value
		})
	}
	
	
	getFareEstimate = (e)=>{
		e.preventDefault()
	   this.setState({showEstimate: !this.state.showEstimate})
    }
    
	
	render() {
	   if(this.props.findDriverByIdStarted){
		   return (<Loader/>)
	   }else{
		   return (
			   <div className="driver-profile-container">
				   <main className={`trip-estimate-container ${this.state.showEstimate}`} >
					   <div className="trip-estimate-content">
						   <p>Estimated Pickup Time: 4 Mins</p>
						   <h2>$10</h2>
						   <h1>Fare Estimate</h1>
					   </div>
					   <Button variant="contained" color="primary" className="green-btn" onClick={this.sendTripRequest}>Confirm Ride Request</Button>
                       <Button variant="contained" color="secondary" className="blue-btn">Logout</Button>
				   </main>
				   <header>
					   <div className="driver-profile-img-container ">
						   <img src="https://gintoki23.tumblr.com/image/133797283889" alt="driver" className="round"/>
					   </div>
					   <h1>{this.props.currentDriver.username}</h1>
					   <h3>Uganda</h3>
				   </header>
				   <div className="stats-container">
					   <div>
						   <h2>99</h2>
						   <p>RIDES</p>
					   </div>
					   <div>
						   <h2>{this.props.currentDriver.review && this.props.currentDriver.review.length}</h2>
						   <p>REVIEWS</p>
					   </div>
				   </div>
				   <main className="driver-profile-main">
					   <Edit className="edit-btn-container"
							 onClick={this.editProfile}/>
                        <DeleteForeverIcon className="delete-btn-container"
                            onClick={this.deleteProfile}/>
					   <header >
						   <div className="driver-profile-img-avatar">
							   <img src="https://gintoki23.tumblr.com/image/133797283889" alt="driver"/>
						   </div>
						   <div className="title">
							   <h2>{this.props.currentDriver.username}</h2>
							   <h5>Driving for 2 years</h5>
						   </div>
					   </header>
					   {this.state.isEditing
						   ? <form>
							 <textarea
								 value={this.state.profileBody}
								 onChange={this.changeHandler}/>
							   <button onClick={this.updateProfile}>Save Change</button>
						   </form>
						   : <p>
							   {this.state.profileBody}
						   </p>
					    } 
    
					   { this.props.currentDriver.review && this.props.currentDriver.review.map((item, idx) => (
						   <div className="review-container" key={idx}>
							   { item.username === JSON.parse(localStorage.getItem('loggedInUser')).username
							   	 ? <Clear/>
							   	 : null
							   }
							   <h2>{item.username}</h2>
							   <div className="star-container">
								   <h2>{item.rating} Stars</h2>
							   </div>
							   <p>{item.review}</p>
						   </div>
					   ))}
					   <div className="fav-button-bar">
						   <Link to="#" className="share">
							   <Share/>
						   </Link>
						   <Link to="#"  className="phone">
							   <strong>39 </strong>
							   <PhoneIcon/>
						   </Link>
						   <Link to="#"  className="fav">
							   <strong>125 </strong>
							   <FavoriteBorder/>
						   </Link>
					   </div>
				   </main>
			   </div>
		   );
	   }
	}
	
}




export default DriverProfilePage