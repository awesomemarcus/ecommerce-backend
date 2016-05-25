export default {
  Add({Meteor, LocalState, FlowRouter, Bert}, title, description) {
   if(!title) {
    return LocalState.set('ADDING_ERROR', 'Title is required.');
   }

   if(!description) {
    return LocalState.set('ADDING_ERROR', 'Description is required.');
   }

   Meteor.call('categoriesAdd', title.toLowerCase(), description, (err) => {
    if(err){
     return LocalState.set('ADDING_ERROR', err.message);
    }
   });

   Bert.alert(title + ' Saved!', 'success', 'fixed-top', 'fa-check');

   FlowRouter.go('categories.add');
  },

  clearErrors({LocalState}){
   return LocalState.set('SAVING_ERROR', null);
  },

  Update({Meteor, LocalState, FlowRouter, Bert}, catId, title, description){
   if(!title){
    return Bert.alert('Title field is required', 'danger', 'fixed-top', 'fa-frown-o');
   }

   if(!description){
    return Bert.alert('Description field is required', 'danger', 'fixed-top', 'fa-frown-o');
   }

   Meteor.call('categoriesUpdate', catId, title, description, (err) => {
    if(err){
     return Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
    }

    Bert.alert('Category Updated!', 'success', 'fixed-top', 'fa-check');
   });
  },

  Delete({Meteor, Bert}, catTitle) {

   Meteor.call('categoriesDelete', catTitle, (err) => {
    if(err){
     return Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
    }
     Meteor.call('productsCategoryUpdate', catTitle, (err) => {
      if(err){
       return Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
      }

      Bert.alert('Deleted Successfully', 'success', 'fixed-top', 'fa-check');
     });
   });

  },
}
