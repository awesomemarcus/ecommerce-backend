export default {
  login({Meteor, LocalState, FlowRouter}, email, password) {
    if(!email){
      return LocalState.set('LOGIN_ERROR', 'Email is required.')
    }

    if(!password){
      return LocalState.set('LOGIN_ERROR', 'Password is required.')
    }

   LocalState.set('LOGIN_ERROR', null);

   Meteor.loginWithPassword(email, password, (err) => {
    if(err){
     return LocalState.set('LOGIN_ERROR', err.message);
    }
   });

   FlowRouter.go('/');
  },

  clearErrors({LocalState}){
   return LocalState.set('SAVING_ERROR', null);
  }
}
