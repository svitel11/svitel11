import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Test from "./components/Test"
import HomePage from "./components/HomePage";

const router =  new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        }
    ]
});
export default router;