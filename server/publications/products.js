import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('productsList', function () {
    return Products.find();
  });

  Meteor.publish('productSingle', function(prodId) {
   check(prodId, String);
   return Products.find({_id: prodId});
  });
}
