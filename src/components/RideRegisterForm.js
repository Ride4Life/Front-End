import React from "react";
import { withFormik,Form, Field } from "formik";

import * as Yup from "yup";

import axiosWithAuth from "../authentication/axiosWithAuth";
/*
Step 1) Create a form to register a new ride requester
*/
const RideRegisterForm = ({ values, errors, touched, handleChange }) => {
   
    return (
        <div className="registration-form">
            <Form>
                <div>
                    <label htmlFor="first_name">
                        First Name:
                        <Field
                            id="firstname"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                        />
                        {touched.firstname && errors.firstname && (
                            <p className="errors">{errors.firstname}</p>
                        )}
                    </label>
                    <label htmlFor="lastname">
                        Last Name:
                        <Field
                            id="lastname"
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                        />
                        {touched.lastname && errors.lastname && (
                            <p className="errors">{errors.lastname}</p>
                        )}
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email Adress:
                        <Field
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Email Address"
                        />
                        {touched.email && errors.email && (
                            <p className="errors">{errors.email}</p>
                        )}
                    </label>
                    <label htmlFor="username">
                        Username:
                        <Field
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                        {touched.username && errors.username && (
                            <p className="errors">{errors.username}</p>
                        )}
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password:
                        <Field
                            id="password"
                            type="text"
                            name="password"
                            placeholder="Password"
                        />
                        {touched.password && errors.password && (
                            <p className="errors">{errors.password}</p>
                        )}
                    </label>
                </div>
                <div>
                    <label htmlFor="phone_number">
                        Phone Number: {" "}
                        <Field
                            id="phone_number"
                            type="text"
                            name="phone_number"
                            placeholder="Your Phone Number"
                        />
                    </label>
                </div>
                <div>
                    <label className="checkbox">
                        Ride Requester:
                        <input
                            type="radio"
                            name="isDriver"
                            checked={!values.isDriver} 
                            onChange ={handleChange}
                        />
                    </label>
                    <label className="checkbox">
                        Driver:
                        <input
                            type="radio"
                            name="isDriver"
                            checked={values.isDriver}
                            onChange ={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </div>
    );
};
const FormikRideRegisterForm = withFormik({
    mapPropsToValues(props) {
        return {
            first_name: props.first_name || "",
            last_name: props.last_name || "",
            email: props.email || "",
            username: props.username || "",
            password: props.password || "",
            phone_number: props.phone_number || "",
            isDriver: props.isDriver || false,
            //history:props.history
        };
    },
    validationSchema: Yup.object().shape({
        first_name: Yup.string().required('Please enter your first name'),
        last_name: Yup.string().required('Please enter your last name'),
        email: Yup.string().required('Email is required'),
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        phone_number:Yup.string().required("Please enter your phone number")
    }),
    handleSubmit(values) {
        console.log( {...values,isDriver:values.isDriver==="on"});
        axiosWithAuth()
        .post("/auth/signup", {...values, isDriver:values.isDriver==="on"})
        .then((res)=>{
            localStorage.setItem("token", res.data.token);
            //values.history.push(`/profile/${res.data.userID}`);
        })
        .catch((err)=> console.log("ERROR", err));
    }
})(RideRegisterForm);
export default FormikRideRegisterForm;