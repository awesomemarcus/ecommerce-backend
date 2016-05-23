import React from 'react';

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

  return <p>Please <a href="/admin/login">login</a> to view the contents.</p>


};

export default AuthWrapper;
