import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';
import CategoriesAdd from './containers/categories_add.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/admin/categories/add', {
    name: 'categories.add',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CategoriesAdd />)
      });
    }
  });
}
