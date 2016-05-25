import {Mongo} from 'meteor/mongo';

const Categories = new Mongo.Collection('categories');
const Products = new Mongo.Collection('products');
const Cart = new Mongo.Collection('cart');

export {
  Categories,
  Products,
  Cart,
};
