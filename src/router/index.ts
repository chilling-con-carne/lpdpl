import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/Home.vue';

const routes = [
    {
        path: '/',
        name: "home",
        component: Home,
    },
    {
        path: '/informations',
        name: 'infos',
        component: () => import("../pages/Infos.vue"),
    },
    {
        path: '/choix-panier',
        name: "basket-choice",
        component: () => import("../pages/BasketChoice.vue"),
    },
    {
        path: '/points-relais',
        name: "relay-point",
        component: () => import("../pages/RelayPoint.vue"),
    },
    {
        path: '/connexion',
        name: 'login',
        component: () => import("../pages/Login.vue"),
    },
    {
        path: '/inscription',
        name: 'register',
        component: () => import("../pages/Registration.vue"),
    },
    {
        path: '/commande/details',
        name:'order-detail',
        component: () => import('../pages/Orders/OrderDetails.vue'),
    },
    {
        path: '/commande/infos',
        name: 'order-infos',
        component: () => import('../pages/Orders/OrderInfos.vue'),
    },
    {
        path: '/commande/recap',
        name: 'order-recap',
        component: () => import('../pages/Orders/OrderRecap.vue'),
    },
]


export default createRouter({
    history: createWebHashHistory(),
    routes
})