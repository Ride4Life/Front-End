import React from 'react';

import './App.css';
import RideRequesterForm from './components/RideRegisterForm'
import DriverRegisterForm from './components/DriverRegisterForm';

function App() {
  return (
    <div className="App">
      Welcome to the APP
      <div>
          <RideRequesterForm /> 
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      {/* <div>
          <DriverRegisterForm/>
      </div> */}
    </div>
  );
}

export default App;
