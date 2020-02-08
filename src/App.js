import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import './App.css';

// import './ProfilePage/Driver/Profile.css'
// import ProfilePage from './ProfilePage/Driver/ProfilePage.js'

import RideRequesterForm from './components/RideRegisterForm'
import FormikUserLoginForm from './components/UserLoginForm';
import SignUp from './components/EditProfileForm'
import PrivateRoute from "./components/PrivateRoute";
import { Nav } from "./components/Nav"
import ProfilePage from './ProfilePage/Driver/ProfilePage';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route path="/login" component={FormikUserLoginForm} />
          <Route path="/register" component={RideRequesterForm} />
          <Route path="/edit-profile" component={SignUp} />
          {/* <PrivateRoute path="/driver-dashboard" component={DriverDashboard} />
          <PrivateRoute path="/rider-dashboard" component={RiderDashboard} /> */}
        </Switch>
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <ProfilePage />
//   )
// }

export default App;

