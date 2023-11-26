import { createRouter, createWebHistory } from 'vue-router';
import Products from "@/pages/Products.vue";
import Cart from "@/pages/Cart.vue";
import Login from "@/pages/Login.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/products' },
        { path: '/products', component: Products },
        { path: '/cart', component: Cart },
        { path: '/login', component: Login },
    ]
})

export default router;