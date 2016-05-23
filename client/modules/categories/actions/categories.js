export default {
  Add({Meteor, LocalState, FlowRouter, Bert}, title, description) {
   if(!title) {
    return LocalState.set('ADDING_ERROR', 'Title is required.');
   }

   if(!description) {
    return LocalState.set('ADDING_ERROR', 'Description is required.');
   }

   Meteor.call('categoriesAdd', title, description, (err) => {
    if(err){
     return LocalState.set('ADDING_ERROR', err.message);
    }
   });

   Bert.alert('Category Saved!', 'success', 'fixed-top', 'fa-check');

   FlowRouter.go('categories.add');
  },

  clearErrors({LocalState}){
   return LocalState.set('SAVING_ERROR', null);
  },
}
