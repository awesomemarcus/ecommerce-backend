import React from 'react';
import Login from '../../admin/containers/login.js';

const AuthWrapper = ({loggedIn, loggingIn, children}) => {
  if(loggedIn) {
   return (
     <div>{children}</div>
   );
  }

  if(loggingIn) {
    return (
      <p>Loading...</p>
    );
  }

  return <Login />


};

export default AuthWrapper;
