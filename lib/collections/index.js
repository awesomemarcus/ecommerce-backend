import {Mongo} from 'meteor/mongo';
import {FS} from 'meteor/cfs:base-package';

const Categories = new Mongo.Collection('categories');
const Products = new Mongo.Collection('products');
const Cart = new Mongo.Collection('cart');
const Orders = new Mongo.Collection('orders');

const Images = new FS.Collection('Images', {
 stores:[new FS.Store.GridFS('Images')],
});

Images.allow({
 download: function(){
  return true;
 },
 insert(userId, doc){
  return true;
 },
 update(userId, doc, fields, modifier){
  return true;
 },
});

export {
  Categories,
  Products,
  Cart,
  Images,
  Orders,
};
