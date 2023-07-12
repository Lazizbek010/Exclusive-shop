import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';
import ErrorView from '../views/ErrorView.vue';
import AccountView from '../views/AccountView.vue';


import Wishlist from '../views/WishlistView.vue';

import ProdactDetalis from '../views/ProductDetailView.vue'
import Cart from '../views/CartView.vue';
import LogIn from '../views/LogInView.vue';
import SignUp from '../views/SignUpView.vue';





const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/product',
            name: 'product',
            component: ProdactDetalis,
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: SignUp,
        },
        {
            path: '/wishlist',
            name: 'wishlist',
            component: Wishlist,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/login',
            name: 'login',
            component: LogIn,
        },
        {

            path: '/error',
            name: 'error',
            component: ErrorView,
        },
        {

            path: '/account',
            name: 'account',
            component: AccountView,
        },

  ]
})


export default router