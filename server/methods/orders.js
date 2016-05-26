import {Orders} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'statusUpdate'(status, orderId) {
      check(status, String);
      check(orderId, String);

      Orders.update(orderId,{$set: {status: status}});

    }
  });
}
