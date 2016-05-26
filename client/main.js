import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import adminModule from './modules/admin';
import categoriesModule from './modules/categories';
import productsModule from './modules/products';
import uploadsModule from './modules/uploads';
import ordersModule from './modules/orders';




// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(adminModule);
app.loadModule(categoriesModule);
app.loadModule(productsModule);
app.loadModule(uploadsModule);
app.loadModule(ordersModule);
app.init();
