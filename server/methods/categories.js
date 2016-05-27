import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'categoriesAdd'(title, description, categoryImage) {
      check(title, String);
      check(description, String);
      check(categoryImage, String);
      const createdAt = new Date();
      const categoryItem = {title, description, categoryImage, createdAt};
      Categories.insert(categoryItem);
    },

    'categoriesUpdate'(catId, catItems){

     Categories.update({_id:catId}, {$set:catItems});
    },

    'categoriesDelete'(title){
     check(title, String);
     Categories.remove({title: title});
    },
  });
}
