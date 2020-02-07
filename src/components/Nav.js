import React, { useState, useEffect } from "react";
// import { withFormik,Form, Field } from "formik";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
  } from "react-router-dom";
  
export const Nav = () => {
  
    return (
    <div>
         <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
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
