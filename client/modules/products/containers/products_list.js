import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsList from '../components/products_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('productsList').ready()){

   const products = Collections.Products.find({}, {sort: {createdAt: -1}}).fetch();

   onData(null, {products});
  }

};

export const depsMapper = (context, actions) => ({
  productDelete: actions.products.Delete,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsList);
