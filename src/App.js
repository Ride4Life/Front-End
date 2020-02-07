import React from 'react';

import './App.css';
// import RideRequesterForm from './components/RideRegisterForm'
// import DriverRegister from './components/DriverRegister';
// import ReviewForm from './components/ReviewForm';
import DriverProfilePage from './ProfilePage/Driver/DriverProfilePage'
// import { func } from 'prop-types';


// function App() {
//   return (
//     <div className="App">
//       Welcome to the APP
//       <div>
//           {/* <RideRequesterForm />  */}
//         </div>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//       {/* <div>
//           <DriverRegister/>
//       </div> */}
//       <div>
//       <ReviewForm />
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <DriverProfilePage />
    </div>
  )
}

export default App;
