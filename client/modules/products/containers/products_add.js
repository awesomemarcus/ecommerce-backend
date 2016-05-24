import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsAdd from '../components/products_add.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SAVING_PRODUCT_ERROR');

  if(Meteor.subscribe('categoriesList').ready()){

   const categories = Collections.Categories.find({}, {fields: {title: 1}, sort: {title: 1}}).fetch();

   onData(null, {categories, error});
  }

  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  addProduct: actions.products.Add,
  clearErrors: actions.products.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsAdd);
