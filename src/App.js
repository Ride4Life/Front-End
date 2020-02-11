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
import EditPorfileForm from "./components/EditProfileForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route path="/login" component={FormikUserLoginForm} />
          <Route path="/register" component={RideRequesterForm} />
          <Route path="/profile/:userID" component={ProfilePage} />
          <PrivateRoute path="/reviews/add" component={ReviewForm}/>
          <PrivateRoute path="/edit-profile" component={EditPorfileForm}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

