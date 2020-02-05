import React from 'react';

import './App.css';
import RideRequesterForm from './components/RideRegisterForm'
import DriverRegister from './components/DriverRegister';
import FormikUserLoginForm from './components/UserLoginForm';

function App() {
  return (
    <div className="App">
      Welcome to the APP
      <br/>
      <br/>
      <br/>
      <div>
        <FormikUserLoginForm/>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
          <RideRequesterForm /> 
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <div>
          <DriverRegister/>
      </div> */}
    </div>
  );
}

export default App;
