import React from 'react';
import SideBar from './side_bar.jsx';

const Layout = ({content}) => (
  <div className="main container">
   <div className="row">
    <div className="col-md-3">
     <SideBar />
    </div>
    <div className="col-md-9">
     {content()}
    </div>
   </div>
  </div>
);

export default Layout;
