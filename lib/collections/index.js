import {Mongo} from 'meteor/mongo';

const Categories = new Mongo.Collection('categories');
const Products = new Mongo.Collection('products');

export {
  Categories,
  Products,
};
