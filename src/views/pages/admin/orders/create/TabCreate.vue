<script setup lang="ts">
import { ref } from 'vue';
import ShoppingCart from './ShoppingCart.vue';

interface TabItem {
    value: string;
    label: string;
    code: string;
    badge?: number;
    closable?: boolean;
    content?: string;
}

const tabs = ref<TabItem[]>([]);
const activeTab = ref('');
let nextTabIndex = 1;

function generateOrderCode() {
    // Sinh mã HD_ + 5 ký tự hex ngẫu nhiên
    return 'HD_' + Math.random().toString(16).slice(2, 7).toUpperCase();
}

function addNewTab() {
    const newValue = nextTabIndex.toString();
    const code = generateOrderCode();
    tabs.value.push({
        value: newValue,
        label: `Hóa đơn: ${code}`,
        code,
        badge: 0, // số badge ngẫu nhiên ví dụ 0-9
        closable: true,
        content: `Nội dung của ${code}`
    });
    activeTab.value = newValue;
    nextTabIndex++;
}

function closeTab(value: string) {
    const index = tabs.value.findIndex((tab) => tab.value === value);
    if (index !== -1) {
        tabs.value.splice(index, 1);
        if (activeTab.value === value) {
            if (tabs.value.length > 0) {
                activeTab.value = tabs.value[tabs.value.length - 1].value;
            } else {
                activeTab.value = '';
            }
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4"><i class="pi pi-receipt"></i> Bán hàng tại quầy</div>

        <Tabs v-model:activeKey="activeTab" class="custom-tablist">
            <TabList>
                <Tab v-for="tab in tabs" :key="tab.value" :value="tab.value">
                    <div class="tab-label-wrapper">
                        <span class="tab-label">{{ tab.label }}</span>
                        <span v-if="tab.badge && tab.badge > 0" class="tab-badge">{{ tab.badge }}</span>
                        <Button v-if="tab.closable" icon="pi pi-times" class="p-button-rounded p-button-text p-button-danger tab-close-button" @click.stop.prevent="closeTab(tab.value)" aria-label="Đóng tab" />
                    </div>
                </Tab>
                <Tab value="add" class="add-tab" :disabled="false">
                    <Button icon="pi pi-plus" class="p-button-rounded p-button-text" @click.prevent="addNewTab" aria-label="Thêm tab mới" />
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel v-for="tab in tabs" :key="tab.value" :value="tab.value">
                    <ShoppingCart />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<style scoped>
.custom-tablist {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.5rem;
    overflow-x: auto;
}

.tab-label-wrapper {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    position: relative;
}

.tab-label {
    font-weight: 600;
    max-width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tab-badge {
    background-color: #dc2626;
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0 6px;
    border-radius: 9999px;
    line-height: 1.5;
    display: inline-block;
    min-width: 18px;
    text-align: center;
}

.tab-close-button {
    padding: 0;
    width: 20px;
    height: 20px;
    line-height: 20px;
}
.add-tab .p-button {
    padding: 0.3rem;
    font-size: 1.2rem;
    color: #2563eb;
}

.add-tab .p-button:hover {
    background-color: #e0f2fe;
    color: #1d4ed8;
    border-radius: 50%;
}
</style>
