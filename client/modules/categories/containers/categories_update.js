import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesUpdate from '../components/categories_update.jsx';

export const composer = ({context, catId}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('UPDATING_CATEGORY_ERROR');

  if(Meteor.subscribe('categoriesSingle', catId).ready()){

   const category = Collections.Categories.findOne({_id: catId});
   onData(null, {error, category});
  }

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesUpdate);
