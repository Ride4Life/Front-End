import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import { Rating } from '@material-ui/lab'
import { Formik, Form } from "formik";
import * as yup from "yup";
import axiosWithAuth from '../authentication/axiosWithAuth';

const ReviewSchema = yup.object().shape({
    first_name: yup.string().required("This field is required."),
    review: yup.string().required("This field is required."),
});
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Ride for Life
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.warning.main,
        width: 100,
        height: 100,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 1),
        backgroundColor: theme.palette.warning.main,
        height: 50,
    },
}));

export default function ReviewForm({location}) {
    const classes = useStyles();
    

    return (
        <Container component="main" maxWidth="sm">
            <Typography component="h1" variant="h4">
                Thank you for taking the time to leave a review for Ride For Life.
            </Typography>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <MotorcycleIcon style={{ fontSize: 70 }} />
                </Avatar>
                <Typography component="h1" variant="h4">
                    How did we do?
                </Typography>
                <Box component="fieldset" mb={1} borderColor="transparent">
                    <Typography component="h1" variant="h6">
                        Overall Rating
                </Typography>
                </Box>
                <Formik
                    initialValues={{
                        first_name: "",
                        review: "",
                        rating: ""
                    }}
                    validationSchema={ReviewSchema}
                    onSubmit={values => {
                        console.log(values);
                        const driverid = (location.state.driverid);
                        console.log(driverid);
                        //axios goes here
                        axiosWithAuth()
                        .post(`/profiles/${driverid}/review`, values)
                        .then((res=>{
                            values.history.push(`/profiles/${driverid}`);
                        }))
                        .catch((err)=> console.log("ERROR", err));
                    }}
                >
                    {({ errors, handleChange, handleSubmit, touched }) => (
                        <Form className={classes.form} >
                             <Rating
                        size="large"
                        name="rating"
                        onChange={handleChange}
                    />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        error={errors.firstName && touched.firstName}
                                        autoComplete="fname"
                                        name="first_name"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        inputProps={{ style: { fontSize: 20 } }}
                                        InputLabelProps={{ style: { fontSize: 20 } }}
                                        autoFocus
                                        helperText={
                                            errors.firstName && touched.firstName ? errors.firstName : null
                                        }
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="comment"
                                        label="How was your expierence?"
                                        name="review"
                                        inputProps={{ style: { fontSize: 20 } }}
                                        InputLabelProps={{ style: { fontSize: 20 } }}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Submit Review
                    </Button>
                        </Form>
                    )}
                </Formik>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}