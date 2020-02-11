import React, {useState,useEffect} from 'react';

//Form Styling
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//React-Redux
import {useSelector,useDispatch } from "react-redux";
import {putUserData} from "../redux/actions/serverActions";


const useStyles = makeStyles(({
  paper: {
    marginTop:"8px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin:"1px",
    backgroundColor: "skyblue"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop:"3px"
  },
  submit: {
    margin:"3px, 0px, 2px"
  },
  formControl: {
    margin: "3px,0px, 1px"
  },
}));

const EditProfileForm = ({match,history}) => {
  const currentUser = useSelector((state)=>{
    return state.currentUser;
  });
  const [userData, setUserData] = useState(currentUser)
  
  const handleUserInfoChange = (e)=>{
     const name= e.currentTarget.name;
     const value=e.currentTarget.value;
     setUserData({...userData,[name]:value});
  }
  const userID = match.params.userID
  const dispatch = useDispatch()
  const updateUserProfile = (e)=>{
    e.preventDefault();
    dispatch(putUserData(
      userID,userData
    ));
    history.push(`/profile/${userID}`)
	}


  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={"classes.paper"}>
        <Avatar className={"classes.avatar"}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Ride4Life Profile
        </Typography>
        <form className={"classes.form"} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                autoFocus
                value ={userData.first_name}
                onChange={handleUserInfoChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                value={userData.last_name}
                onChange={handleUserInfoChange}
    
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userData.email}
                onChange={handleUserInfoChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={userData.username}
                onChange={handleUserInfoChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone_number"
                label="Phone Number"
                type="phone_number"
                id="phone_number"
                autoComplete="current-password"
                value={userData.phone_number}
                onChange={handleUserInfoChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={"classes.submit"}
            onClick= {updateUserProfile}
          >
            Submit
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={"classes.submit"}
            onClick= {updateUserProfile}
          >
            Delete

          </Button>
        </form>
      </div>
    </Container>
  );
}

export default EditProfileForm;