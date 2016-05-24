import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesSelect from '../components/categories_select.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('categoriesList').ready){

   const categoriesList = Collections.Categories.find({}, {sort: {title: -1}}).fetch();

   onData(null, {categoriesList});
  }
};



export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(CategoriesSelect);
