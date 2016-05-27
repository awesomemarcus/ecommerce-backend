import {SyncedCron} from 'meteor/percolate:synced-cron';
import {Orders} from '/lib/collections';


SyncedCron.add({
  name: 'Cron Job',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('at 12:00 am');
  },
  job: function() {

     const orders = Orders.aggregate({$group: {_id: null, total: {$sum: '$totalAmount'}}});

     Meteor.call("emailTotalSales", orders[0].total);
  },
});

SyncedCron.start();
