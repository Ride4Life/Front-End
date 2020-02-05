import React, { Component } from 'react';
import {connect} from 'react-redux'
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Edit from "@material-ui/icons/Edit";
import Loader from 'react-loader-spinner'
import {Avatar} from "@material-ui/core";
// import IconButton from "@material-ui/core/IconButton";
import Driver from "./img/driver.png"


class DriverProfilePage extends Component {
	state = {
		showPopup:true
	}
	
	changeHandler = (e) => {
		this.setState({
			profileBody: e.target.value
		})
	}
		
	render() {
		const {currentDriver, findDriverByIdStarted} = this.props
		const {showPopup} = this.state
		console.log('currentDriver', currentDriver)
		
		if(!currentDriver){
			return (<Loader/>)
		}else{
			return (
				<div className={`driver-profile-container ${showPopup ? "slideInPopup" : "slideOutPopup" }`}>
					{/* <IconButton
						color="inherit"
						aria-label="back"
						className={"back-arrow-button"}
						onClick={this.handleBack}
						style={{position:"absolute"}}
					>
						<img src={Driver} alt={"driver"}/>
					</IconButton> */}
					<header>
						<div className="driver-profile-img-container ">
							<img src={Driver} className="round" alt={"driver avatar"}/>
						</div>
						<h1 className={"blue-text"}>{currentDriver.username}</h1>
						<h3>{currentDriver.city}</h3>
					</header>
					<div className="stats-container">
						<div>
							<h2>{currentDriver.tripCompleted}</h2>
							<p>RIDES</p>
						</div>
						<div>
							<h2>{currentDriver.rating}</h2>
							<p>RATING</p>
						</div>
						<div>
							<h2>{currentDriver.review && currentDriver.review.length > 0 ? currentDriver.review.length : 0 }</h2>
							<p>REVIEWS</p>
						</div>
					</div>
					
					<main className="driver-profile-main">
						<Edit className="edit-btn-container"
							  onClick={this.editProfile}/>
						<header >
							<div className="driver-profile-img-avatar">
								<Avatar src={Driver}  alt={"driver"} />
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
								<h2>{item.username}</h2>
								<div className="star-container">
									<h2>{item.rating} Stars</h2>
								</div>
								<p>{item.review}</p>
							</div>
						))}
					</main>
				</div>
			);
		}
	}
	
}

export default DriverProfilePage;
