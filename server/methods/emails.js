import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Email} from 'meteor/email';

export default function () {
  Meteor.methods({
   'emailShipped'(order) {

    var itemsList = [];

    order.items.map( item => {
     itemsList.push('<li>'+ item.title +'</li>')
    });



    Email.send({
     to: order.clientInfo.email,
     from: "marcus@snapzio.com",
     subject: "Orders Shipped",
     html: "Hello " + order.clientInfo.firstName + " " + order.clientInfo.lastName + ", Your orders <ul>" + itemsList + "</ul> <p>is on its way!</p>",
    });

   },
   'emailTotalSales'(total){

    Email.send({
     to: "marcus@snapzio.com",
     from: "marcus@snapzio.com",
     subject: "Total Sales",
     html: "Hello Marcus, your total sales:" + total,
    });
   },
  });
}
