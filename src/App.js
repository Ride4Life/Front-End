import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import './App.css';
import RideRequesterForm from './components/RideRegisterForm'
import FormikUserLoginForm from './components/UserLoginForm';
import PrivateRoute from "./components/PrivateRouter/PrivateRoute";
import { Nav } from "./components/Nav"
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route path="/login" component={FormikUserLoginForm} />
          <Route path="/register" component={RideRequesterForm} />
          {/* <PrivateRoute path="/driver-dashboard" component={DriverDashboard} />
          <PrivateRoute path="/rider-dashboard" component={RiderDashboard} /> */}
        </Switch>
      </div>
    </Router>
  );
}
export default App;