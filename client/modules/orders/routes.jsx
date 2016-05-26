import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import OrdersList from './containers/orders_list.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/admin/orders', {
    name: '',
    action() {
     mount(MainLayoutCtx, {
        content: () => (<OrdersList />),
      });
    },
  });
}
