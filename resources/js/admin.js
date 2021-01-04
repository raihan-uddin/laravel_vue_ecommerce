/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import router from "./admin/router";
Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);


Vue.config.ignoredElements = ['submenu']
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const admin = new Vue({
    el: '#admin',
    router,
    data: {test: 'Testing Admin from View'},
});

