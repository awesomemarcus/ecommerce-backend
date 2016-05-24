import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';
import ProductsAdd from './containers/products_add.js';
import ProductsList from './containers/products_list.js';
import ProductsUpdate from './containers/products_update.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/admin/products', {
   name: 'products.list',
   action() {
    mount(MainLayoutCtx, {
     content: () => (<ProductsList />),
    })
   },
  });

  FlowRouter.route('/admin/products/add', {
    name: 'products.add',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ProductsAdd />),
      });
    },
  });

  FlowRouter.route('/admin/products/update/:prodId', {
   action(params) {
    mount(MainLayoutCtx, {
     content: () => (<ProductsUpdate prodId={params.prodId} />),
    })
   },
  })
}
