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
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav"
import ProfilePage from './components/ProfilePage';
import ReviewForm from "./components/ReviewForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route path="/login" component={FormikUserLoginForm} />
          <Route path="/register" component={RideRequesterForm} />
          <Route path="/profile/" component={ProfilePage} />
          <PrivateRoute path="/reviews/add" component={ReviewForm}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

