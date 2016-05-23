import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesAdd from '../components/categories_add.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('ADDING_ERROR');

  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  addCategory: actions.categories.Add,
  clearErrors: actions.categories.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesAdd);
