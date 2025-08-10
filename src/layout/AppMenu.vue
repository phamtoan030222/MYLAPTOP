<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Trang chủ',
        items: [{ label: 'Bảng điều khiển', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Đơn hàng',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
            { label: 'Tất cả đơn hàng', icon: 'pi pi-fw pi-list', to: '/orders' },
            { label: 'Tạo đơn hàng', icon: 'pi pi-fw pi-plus', to: '/orders/create' }
        ]
    },
    {
        label: 'Sản phẩm',
        icon: 'pi pi-fw pi-box',
        items: [
            { label: 'Quản lý sản phẩm', icon: 'pi pi-fw pi-list', to: '/products' },
            {
                label: 'Quản lý thuộc tính',
                icon: 'pi pi-cog',
                items: [
                    { label: 'CPU', icon: 'pi pi-fw pi-microchip', to: '/attributes/cpu' },
                    { label: 'RAM', icon: 'pi pi-fw pi-desktop', to: '/attributes/ram' },
                    { label: 'Ổ cứng', icon: 'pi pi-fw pi-server', to: '/attributes/storage' },
                    { label: 'Card đồ họa', icon: 'pi pi-fw pi-desktop', to: '/attributes/gpu' },
                    { label: 'Màn hình', icon: 'pi pi-fw pi-image', to: '/attributes/display' },
                    { label: 'Hệ điều hành', icon: 'pi pi-fw pi-window-maximize', to: '/attributes/os' },
                    { label: 'Pin', icon: 'pi pi-fw pi-power-off', to: '/attributes/battery' },
                    { label: 'Kết nối', icon: 'pi pi-fw pi-wifi', to: '/attributes/connectivity' }
                ]
            }
        ]
    },
    {
        label: 'Người dùng',
        icon: 'pi pi-fw pi-users',
        items: [
            { label: 'Khách hàng', icon: 'pi pi-fw pi-user', to: '/users/client' },
            { label: 'Nhân viên', icon: 'pi pi-fw pi-id-card', to: '/users/staff' }
        ]
    },
    {
        label: 'Khuyến mãi',
        icon: 'pi pi-fw pi-percentage',
        items: [
            { label: 'Mã giảm giá', icon: 'pi pi-fw pi-ticket', to: '/discount/coupon' },
            { label: 'Chương trình giảm giá', icon: 'pi pi-fw pi-tags', to: '/discount/sale' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="i">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>
