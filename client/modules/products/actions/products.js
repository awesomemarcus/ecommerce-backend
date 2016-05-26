export default {
  Add({Meteor, LocalState, FlowRouter, Bert}, title, description, category, price, quantity, productImage) {
   if(!title || !description || !category || !price || !quantity || !productImage){
    return LocalState.set('SAVING_PRODUCT_ERROR', 'All fields are required.')
   }

   Meteor.call('productsAdd', title, description, category, price, quantity, productImage, (err) => {
    if(err){
     return LocalState.set('SAVING_PRODUCT_ERROR', err.message);
    }

    Bert.alert(title + ' Saved!', 'success', 'fixed-top', 'fa-check');

   });
  },

  Update({Meteor, LocalState, FlowRouter, Bert}, prodId, productItem) {

    Meteor.call('productsUpdate', prodId, productItem, (err) => {
     if(err){
      return LocalState.set('UPDATING_PRODUCT_ERROR', err.reason)
     }
     Bert.alert('Product Updated', 'success', ' fixed-top', 'fa-check');
    })

  },

  Delete({Meteor, Bert}, prodId) {

   Meteor.call('productsDelete', prodId);

  },

  clearErrors({LocalState}) {
   return LocalState.set('SAVING_PRODUCT_ERROR', null);
  },
}
