import React from 'react';


class Login extends React.Component {

  handleLogin(e){
   e.preventDefault();

   const {loginAdmin} = this.props;
   const {email, password} = this.refs;
   loginAdmin(email.value, password.value);

  }

  render() {

    const {error} = this.props;

    return (
       <div className="login-box col-md-6 col-md-offset-3">
         <div className="panel panel-default">
           <div className="panel-heading">
             <h4>Please login.</h4>
           </div>
           <div className="panel-body">

            {error ? <p className="error-msg bg-danger">{error}</p> : ''}

             <form action="" onSubmit={this.handleLogin.bind(this)}>
               <div className="form-group">
                 <input type="email" ref="email" id="" className="form-control" placeholder="Email Address" />
               </div>
               <div className="form-group">
                 <input type="password" ref="password" id="" className="form-control" placeholder="Password here" />
               </div>
               <button className="btn btn-primary">Sign In</button>
             </form>
           </div>
         </div>
       </div>
  );
  }
}

export default Login;
