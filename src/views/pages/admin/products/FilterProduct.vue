<template>
    <div class="flex flex-col w-full h-full">
        <div class="card w-full">
            <div class="font-semibold text-xl mb-4"><i class="pi pi-filter"></i> Bộ lọc</div>

            <!-- Các input + select trên 1 dòng, không có label -->
            <div class="flex flex-wrap items-end gap-3">
                <div class="flex flex-col gap-3 flex-1 min-w-[180px]">
                    <InputText v-model="name" type="text" class="w-full" placeholder="Tìm kiếm sản phẩm" @input="onSearch" />
                </div>

                <!-- Select Thương hiệu -->
                <Select v-model="selectedBrand" :options="brandOptions" optionLabel="name" placeholder="Thương hiệu" class="min-w-[160px]" @change="onSearch" />

                <!-- Select Tình trạng -->
                <Select v-model="selectedStatus" :options="statusOptions" optionLabel="name" placeholder="Tình trạng" class="min-w-[160px]" @change="onSearch" />

                <!-- Nút làm mới -->
                <div class="flex flex-col gap-3 flex-none w-[120px]">
                    <Button label="Làm mới" icon="pi pi-refresh" class="w-full" @click="onReset" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Button from 'primevue/button';

// Model tìm kiếm
const name = ref('');

// Các option cho Select
const brandOptions = ref([
    { name: 'Apple', code: 'APL' },
    { name: 'Samsung', code: 'SAM' },
    { name: 'Xiaomi', code: 'XIA' }
]);
const statusOptions = ref([
    { name: 'Có sẵn', code: 'available' },
    { name: 'Còn ít', code: 'lowstock' },
    { name: 'Hết hàng', code: 'outofstock' }
]);

// Model chọn giá trị cho Select
const selectedBrand = ref(null);
const selectedStatus = ref(null);

const onSearch = () => {
    console.log('Tìm kiếm:', {
        name: name.value,
        brand: selectedBrand.value,
        status: selectedStatus.value
    });
};

const onReset = () => {
    name.value = '';
    selectedBrand.value = null;
    selectedStatus.value = null;
    console.log('Đã làm mới form');
};
</script>
