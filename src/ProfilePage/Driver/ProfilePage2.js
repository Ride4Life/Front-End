import React from 'react';
import driver from '../../assets/img/driver.png'
import { Container } from 'reactstrap'
import {Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle  } from 'reactstrap';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';



function ProfilePage(props) {
	let pageHeader = React.createRef();///
    //Star Rating
	const [value, setValue] = React.useState(4);

    // On Duty switcher
	const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };
	

	return (
		<>
			<div
				className="page-header clear-filter page-header-small"
				filter-color="blue"
			>
				<div
				className="page-header-image"
				ref={pageHeader}
				></div>
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
					<Button outline color="warning">RIDES</Button>{' '}
					</div>
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
						<div className="location">
						<div className="location-smb"><LocationOnIcon color="disabled" style={{fontSize: 50}}/></div>	
						< h2>Location:</h2>
						</div>

						<div className="button-container">
							<FormGroup row>
								<FormControlLabel
									control={
									<Switch size="large" checked={state.checkedA}  onChange={handleChange('checkedA')} value="checkedA" />
									}
								/>
								<h2>On Duty</h2>
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