export default {
  updateStatus({Meteor, Bert}, status, order){

   Meteor.call('statusUpdate', status, order._id, (err) => {
    if(!err){
     Bert.alert('Order Shipped', 'success', 'fixed-top', 'fa-check');

     Meteor.call('emailShipped', order);
    }
   })
  },
}
