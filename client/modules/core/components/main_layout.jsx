import React from 'react';
import SideBar from './side_bar.jsx';
import AuthWrapper from '../../core/containers/auth_wrapper.js';

const Layout = ({content}) => (
 <div>
  <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">O Shopping Admin</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">{Meteor.userId() ? 'Home' : 'Login'}</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <AuthWrapper>
    
   <div className="main container" style={{marginTop: 50}}>
    <div className="row">
     <div className="col-md-3">
      <SideBar />
     </div>
       <div className="col-md-9">
        {content()}
       </div>
    </div>
   </div>
  </AuthWrapper>

 </div>
);

export default Layout;
