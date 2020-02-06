import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axiosWithAuth from "../authentication/axiosWithAuth";
const UserLoginForm = ({ errors, touched }) => {
    return (
        <div className="login-form">
            <Form>
                <h2>Login to Ride 4 Life</h2>
                <Field
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username" />
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password" />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <button type="submit">Login</button>
            </Form>
        </div>
    );
}
const FormikUserLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Username is required"),
        password: Yup.string()
            .required("Password is required")
    }),
    handleSubmit(data) {
        console.log(data)
        //axios here
        axiosWithAuth()
        .post("/auth/login", data)
        .then((res)=>{
            localStorage.setItem("token", res.message.payload);
        })
        .catch((err)=> console.log("ERROR", err));
    }
})(UserLoginForm);
export default FormikUserLoginForm;