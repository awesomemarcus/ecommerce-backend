import React from 'react';

const LoginLayout = ({content}) => (
  <div className="container">
    <div className="row">
     <div className="col-md-12 col-xs-12">
      {content()}
     </div>
    </div>
  </div>
);

export default LoginLayout;
