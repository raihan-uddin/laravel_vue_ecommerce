import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AdminMaster from "../../js/components/admin/AdminMaster";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/admin', component: AdminMaster},
    ],
    // base:'/listing',
    // root:'/',
})

export default router;
