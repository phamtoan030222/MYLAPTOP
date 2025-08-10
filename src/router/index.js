import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Admin routes
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'admin.dashboard',
                    component: () => import('@/views/pages/admin/Dashboard.vue')
                },
                {
                    path: 'orders',
                    name: 'admin.orders.list',
                    component: () => import('@/views/pages/admin/orders/orderlist/Orders.vue')
                },
                {
                    path: 'orders/create',
                    name: 'admin.orders.create',
                    component: () => import('@/views/pages/admin/orders/create/CreateOrder.vue')
                },
                {
                    path: 'products',
                    name: 'admin.products.list',
                    component: () => import('@/views/pages/admin/products/Products.vue')
                },
                {
                    path: 'products/properties',
                    name: 'admin.products.brand',
                    component: () => import('@/views/pages/admin/products/properties/Brand.vue')
                },
                {
                    path: 'users/client',
                    name: 'admin.users.client',
                    component: () => import('@/views/pages/admin/users/Client.vue')
                },
                {
                    path: 'users/staff',
                    name: 'admin.users.staff',
                    component: () => import('@/views/pages/admin/users/Staff.vue')
                },
                {
                    path: 'discount/coupon',
                    name: 'admin.discount.coupon',
                    component: () => import('@/views/pages/admin/discount/Coupon.vue')
                },
                {
                    path: 'discount/sale',
                    name: 'admin.discount.sale',
                    component: () => import('@/views/pages/admin/discount/Sale.vue')
                }
            ]
        },

        // Public routes
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },

        // Auth routes
        {
            path: '/auth/login',
            name: 'auth.login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'auth.accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'auth.error',
            component: () => import('@/views/pages/auth/Error.vue')
        },

        // Not found
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/pages/notfound'
        }
    ]
});

export default router;
