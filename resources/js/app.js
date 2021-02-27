//require('./bootstrap');
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

//Main pages
import App from './views/app.vue'

window.specendData = require('./data.json');

import currencyHelper from './helpers/currency-helper'
Vue.prototype.currencyHelper = currencyHelper
Vue.currencyHelper = currencyHelper

Vue.use(Buefy)

import Inventory from './views/inventory/main.vue'
Vue.component('inventory', Inventory);
import InventoryOrderImport from './views/inventory/orderimport.vue'
Vue.component('inv-order-import', InventoryOrderImport);

const app = new Vue({
    el: '#app',
    components: { App }
});
