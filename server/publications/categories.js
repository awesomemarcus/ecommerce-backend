import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.publish('categoriesList', function () {
    return Categories.find();
  });
}
