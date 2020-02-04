import React from 'react';

import './App.css';
import RideRequesterForm from './components/RideRegisterForm'
import DriverRegister from './components/DriverRegister';

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
          <DriverRegister/>
      </div> */}
    </div>
  );
}

export default App;
