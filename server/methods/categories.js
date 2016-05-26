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

     Categories.update({_id:catId}, {$set:{title: title, description: description, categoryImage: categoryImage}});
    },

    'categoriesDelete'(title){
     check(title, String);
     Categories.remove({title: title});
    },
  });
}
