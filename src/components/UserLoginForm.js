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
    mapPropsToValues({ username, password, history}) {
        console.log(history)
        return {
            username: username || "",
            password: password || "",
            history
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Username is required"),
        password: Yup.string()
            .required("Password is required")
    }),
    handleSubmit(values) {
        console.log(values)
        //axios here
        axiosWithAuth()
        .post("/auth/login", values)
        .then((res)=>{
            localStorage.setItem("token", res.message.payload);
            values.history.push("/profile/");
            //should it be :userid or ${userid}
        })
        .catch((err)=> console.log("ERROR", err),);
    }
})(UserLoginForm);
export default FormikUserLoginForm;