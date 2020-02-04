import React, { useState, useEffect } from "react";
import { withFormik,Form, Field } from "formik";

import * as Yup from "yup";

import axiosWithAuth from "../authentication/axiosWithAuth";
/*
Step 1) Create a form to register a new ride requester
*/
const RideRegisterForm = ({ values, errors, touched }) => {
    const [registerRider, setRegisterRider] = useState([]);
    return (
        <div className="registration-form">
            <Form>
                <label htmlFor="first_name">
                    First Name:
                    <Field
                        id="firstname"
                        type="text"
                        name="firstname"
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
                        name="lastname"
                        placeholder="Last Name"
                    />
                    {touched.lastname && errors.lastname && (
                        <p className="errors">{errors.lastname}</p>
                    )}
                </label>
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
                <label htmlFor="confirm-password">
                    Confirm Password: {" "}
                    <Field
                        id="confirmpassword"
                        type="text"
                        name="confirmpassword"
                        placeholder="Confirm Password"
                    />
                </label>
                <label className="checkbox">
                    I need a ride:
                    <Field
                        type="checkbox"
                        name="isARider"
                        checked={values.isARider}
                    />
                </label>
                <button type="submit">Submit</button>
            </Form>
        </div>
    );
};
const FormikRideRegisterForm = withFormik({
    mapPropsToValues(props) {
        return {
            firstname: props.firstname || "",
            lastname: props.lastname || "",
            email: props.email || "",
            username: props.username || "",
            password: props.password || "",
            confirmpassword: props.confirmpassword || "",
            isARider: props.isARider || false,
        };
    },
    // validation schema//
    validationSchema: Yup.object().shape({
        firstname: Yup.string().required('Please enter your first name'),
        lastname: Yup.string().required('Please enter your last name'),
        email: Yup.string().required('Email is required'),
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmpassword: Yup.string().required(),
    }),
    handleSubmit() {
        // axios call here
    }
})(RideRegisterForm);
export default FormikRideRegisterForm;