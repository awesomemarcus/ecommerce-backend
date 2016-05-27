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

    'categoriesUpdate'(catId, title, description, categoryImage){

     if(categoryImage){
      var items = {
       title: title,
       description: description,
       categoryImage: categoryImage,
      };
     } else {
      items = {
       title: title,
       description: description,
      };
     }

     Categories.update({_id:catId}, {$set:items});
    },

    'categoriesDelete'(title){
     check(title, String);
     Categories.remove({title: title});
    },
  });
}
