import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsUpdate from '../components/products_update.jsx';

export const composer = ({context, prodId}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  const error = LocalState.get('UPDATING_PRODUCT_ERROR');

  if(Meteor.subscribe('productSingle', prodId).ready()){
   const product = Collections.Products.findOne({_id:prodId});
   onData(null, {product, error});
  }

};

export const depsMapper = (context, actions) => ({
  updateProduct: actions.products.Update,
  clearErrors: actions.products.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsUpdate);
