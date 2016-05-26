import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import OrdersList from '../components/orders_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('ordersList').ready()){

   const orders = Collections.Orders.find({}, {sort:{purchasedDate: 1}}).fetch();

   console.log(orders);

   onData(null, {orders});

  }

};

export const depsMapper = (context, actions) => ({
  updateStatus: actions.orders.updateStatus,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(OrdersList);
