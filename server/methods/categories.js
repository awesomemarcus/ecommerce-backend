import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'categoriesAdd'(title, description) {
      check(title, String);
      check(description, String);
      const createdAt = new Date();
      const categoryItem = {title, description, createdAt};
      Categories.insert(categoryItem);
    },

    'categoriesUpdate'(catId, title, description){

     Categories.update({_id:catId}, {$set:{title: title, description: description}});
    },

    'categoriesDelete'(title){
     check(title, String);
     Categories.remove({title: title});
    },
  });
}
