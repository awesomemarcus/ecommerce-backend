import React from 'react';
import OrdersRow from './orders_row.jsx';

class OrdersList extends React.Component{

 handleShipSubmit(status, orderId){

  const {updateStatus} = this.props;

  const itemStatus = status ? 'shipped' : 'pending';

  updateStatus(itemStatus, orderId);

 }

 render(){

  const {orders} = this.props;

  return (
   <div>
     <table className="table table-hover">
      <thead>
       <tr>
        <th>Name:</th>
        <th>Email Address:</th>
        <th>Status:</th>
        <th>Action:</th>
       </tr>
      </thead>
      <tbody>
        {orders.map(order => (
         <OrdersRow key={order._id} onShipOrder={this.handleShipSubmit.bind(this)} order={order}/>
        ))}
      </tbody>
     </table>
   </div>
  );
 }
}

export default OrdersList;
