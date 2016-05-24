import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesList from '../components/categories_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('categoriesList').ready()) {
   const categories = Collections.Categories.find({}, {sort: {title: 1}}).fetch();

   onData(null, {categories});
  }

};

// export const depsMapper = (context, actions) => ({
//   context: () => context
// });

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(CategoriesList);
