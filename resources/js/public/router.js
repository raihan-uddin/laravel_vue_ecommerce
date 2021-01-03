import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ExampleComponent from "../components/ExampleComponent";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/test', component: ExampleComponent},
    ]
})

export default router;
