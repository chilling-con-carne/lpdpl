import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/Home.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/choix-panier',
        component: () => import("../pages/BasketChoice.vue")
    }
]


export default createRouter({
    history: createWebHashHistory(),
    routes
})