import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'productsAdd'(title, description, product_cat, price, quantity, productImage) {
      check(title, String);
      check(description, String);
      check(product_cat, String);
      check(productImage, String);
      // check(price, Number);
      // check(quantity, Number);
      const createdAt = new Date();
      const productItem = {title, description, product_cat, price, quantity, productImage, createdAt};
      Products.insert(productItem);
    },

    'productsUpdate'(prodId, productItem) {

     const {title, description, category, price, quantity, productImage} = productItem;

     Products.update({_id:prodId}, {$set:{title: title, description: description, product_cat: category, price: price, quantity: quantity, productImage: productImage}});
    },

    'productsDelete'(prodId) {
     Products.remove(prodId);
    },

    'productsCategoryUpdate'(catTitle) {
     check(catTitle, String);
     Products.update({product_cat: catTitle}, {$set:{product_cat: 'Uncategorized'}},{multi: true});
    },

  });

  // Meteor.methods({
  //  'productsUpdate'(prodId, productItem) {
  //
  //   const {title, description, category, price, quantity} = productItem;
  //
  //   Products.update({_id:prodId}, {$set:{title: title, description: description, product_cat: category, price: price, quantity: quantity}});
  //  },
  // });
  //
  // Meteor.methods({
  //  'productsDelete'(prodId) {
  //   Products.remove(prodId);
  //  },
  // })
}
