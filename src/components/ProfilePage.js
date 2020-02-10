import React from 'react';
import driver from '../assets/img/driver.png';
import { Container } from 'reactstrap'
import {Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle  } from 'reactstrap';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';




const ProfilePage = (props) => {
	

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
				<h3 className="title">Ryan Scheinder</h3>
				<div className="category">
					<Box component="fieldset" mb={3} borderColor="transparent">
						<Typography component="legend">Controlled</Typography>
						{/* <Rating
						name="simple-controlled"
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
						/> */}
					</Box>
				</div>
				<div className="content">
					<div className="social-description">
					<Button outline color="warning">REVIEWS</Button>{' '}
					</div>
					<div className="social-description">
					<UncontrolledButtonDropdown>
						<DropdownToggle caret>
							CONTACT
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem>email</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>phone</DropdownItem>
						</DropdownMenu>
					</UncontrolledButtonDropdown> 
					</div>
					<div className="driverInfo">
						<div className="button-container">
							<FormGroup row>
								<button 
									onClick={
										() =>{
											const driverid = props.match.params.driverid;
											props.history.push("/reviews/add", {driverid});
										}
									}
								>
									Add Review
								</button>
							</FormGroup>
						</div>
					</div>
				</div>
				</Container>
			</div>
		</>
	  );
}

export default ProfilePage;