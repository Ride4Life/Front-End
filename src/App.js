import React from 'react';

import './App.css';
import './ProfilePage/Driver/Profile.css'


// import RideRequesterForm from './components/RideRegisterForm'
// import DriverRegister from './components/DriverRegister';
// import ReviewForm from './components/ReviewForm';

import ProfilePage from './ProfilePage/Driver/ProfilePage'

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

    <ProfilePage />
  );
}

export default App
