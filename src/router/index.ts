import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/Home.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/choix-panier',
        component: () => import("../pages/BasketChoice.vue"),
    },
    {
        path: '/points-relais',
        component: () => import("../pages/RelayPoint.vue"),
    },
    {
        path: '/connexion',
        component: () => import("../pages/Login.vue"),
    },
    {
        path: '/inscription',
        component: () => import("../pages/Registration.vue"),
    }
]


export default createRouter({
    history: createWebHashHistory(),
    routes
})