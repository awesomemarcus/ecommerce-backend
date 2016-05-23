import React from 'react';
import {mount} from 'react-mounter';

// import MainLayout from '/client/modules/core/components/main_layout.jsx';
import LoginLayout from './components/login_layout.jsx';
import Login from './containers/login.js';
import MainLayout from '../core/components/main_layout.jsx';
import Admin from './components/admin.jsx';

export default function (injectDeps, {FlowRouter}) {
  const LoginLayoutCtx = injectDeps(LoginLayout);
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/admin/login', {
    name: 'admin.login',
    action() {
      mount(LoginLayoutCtx, {
        content: () => (<Login />),
      });
    },
  });

  FlowRouter.route('/admin', {
   name: 'admin.home',
   action() {
    mount(MainLayoutCtx, {
     content: () => (<Admin />),
    })
   },
  })
}
