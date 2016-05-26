export default {
  updateStatus({Meteor, Bert}, status, orderId){

   Meteor.call('statusUpdate', status, orderId, (err) => {
    if(!err){
     return Bert.alert('Order Shipped', 'success', 'fixed-top', 'fa-check');
    }
   })
  },
}
