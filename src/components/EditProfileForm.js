import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Ride For Life
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(3,0, 1),
  },
}));

export default function SignUp() {
  
  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Ride4Life Profile
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm New Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I approve the changes made above."
              />
            </Grid> */}
             <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Phone Number"
                type="phone number"
                id="phoneNumber"
                autoComplete="phone"
              />
            </Grid>
            
          </Grid>
          <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Please contact support to change Account Type</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          {/* <FormControlLabel value="female" control={<Radio />} label="Driver" /> */}
          <FormControlLabel value="driver" control={<Radio />} label="Driver" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="Rider"
          />
        </RadioGroup>
        
      </FormControl>
      <Grid item xs={12}>
            <TextField disabled
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Price"
            type="price"
            id="price"
            autoComplete="price"
            />
        </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

            onSubmit={
                  axiosWithAuth()
                  .put(`/profiles/${userID}/request`, {first_name,last_name,email,username,phone_number })
                  .then((res)=>{
                    console.log(res)
                    dispatch({type:"RIDE_REQUEST_SUCCESS", payload:res.data})
                  })
                  .catch((err)=>{
                    console.log(err)
                  })
                }
       
           
          >
            Submit
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Contact support
              </Link>
            </Grid>
          </Grid>
          
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>






// //   return (
// //     <div>
// //       <FormControl component="fieldset" className={classes.formControl}>
// //         <FormLabel component="legend">Gender</FormLabel>
// //         <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
// //           <FormControlLabel value="female" control={<Radio />} label="Female" />
// //           <FormControlLabel value="male" control={<Radio />} label="Male" />
// //           <FormControlLabel value="other" control={<Radio />} label="Other" />
// //           <FormControlLabel
// //             value="disabled"
// //             disabled
// //             control={<Radio />}
// //             label="(Disabled option)"
// //           />
// //         </RadioGroup>
// //       </FormControl>
// //       <FormControl component="fieldset" className={classes.formControl}>
// //         <FormLabel component="legend">Gender</FormLabel>
// //         <RadioGroup aria-label="gender" name="gender2" value={value} onChange={handleChange}>
// //           <FormControlLabel
// //             value="female"
// //             control={<Radio color="primary" />}
// //             label="Female"
// //             labelPlacement="start"
// //           />
// //           <FormControlLabel
// //             value="male"
// //             control={<Radio color="primary" />}
// //             label="Male"
// //             labelPlacement="start"
// //           />
// //           <FormControlLabel
// //             value="other"
// //             control={<Radio color="primary" />}
// //             label="Other"
// //             labelPlacement="start"
// //           />
// //           <FormControlLabel
// //             value="disabled"
// //             disabled
// //             control={<Radio />}
// //             label="(Disabled option)"
// //             labelPlacement="start"
// //           />
// //         </RadioGroup>
// //         <FormHelperText>labelPlacement start</FormHelperText>
// //       </FormControl>
// //     </div>
//   );
// }




  );
}