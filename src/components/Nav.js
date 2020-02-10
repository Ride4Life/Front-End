import React, { useState, useEffect } from "react";

import '../App.css'
// import { withFormik,Form, Field } from "formik";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
  } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tab/Tab";
  
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