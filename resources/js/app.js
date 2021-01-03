/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import router from "./public/router";

Vue.component('public-master', require('./components/public/PublicMaster.vue').default);

const app = new Vue({
    el: '#app',
    router,
    data: {test: 'Testing Frontend from View'},
});

