import React from 'react';

class OrdersRow extends React.Component{

 handleShipSubmit(e){
  e.preventDefault();

  const {order} = this.props;

  this.props.onShipOrder(true, order._id);
 }

 render(){

  const {order} = this.props;

  return(
   <tr>
     <td>{order.clientInfo.firstName + " " + order.clientInfo.lastName}</td>
     <td>{order.clientInfo.email}</td>
     <td className={(order.status == 'shipped') ? 'bg-success text-center' : 'bg-danger text-center'}>{order.status}</td>
     <td>
      {(order.status == 'shipped' ? 'shipped':
        <button className="btn btn-primary" onClick={this.handleShipSubmit.bind(this)}>Ship?</button>
      )}
     </td>
   </tr>
  )
 }
}

export default OrdersRow;
