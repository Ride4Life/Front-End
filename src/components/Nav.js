import React from "react";

import '../App.css'
// import { withFormik,Form, Field } from "formik";
import {
    NavLink
  } from "react-router-dom";
  
const Nav = () => {
  
    return (
    <div>
         <nav>
          <ul>
            <li>
              <a href ="https://peaceful-roentgen-255f0d.netlify.com/index.html">Home</a>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
    </div>
    );
};

export default Nav;