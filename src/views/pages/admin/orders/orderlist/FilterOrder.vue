<template>
    <div class="flex flex-col w-full h-full">
        <div class="card w-full">
            <div class="font-semibold text-xl mb-4"><i class="pi pi-filter"></i> Bộ lọc</div>

            <!-- Các input + chọn ngày trên 1 dòng, không có label -->
            <div class="flex flex-wrap items-end gap-3">
                <div class="flex flex-col gap-3 flex-1 min-w-[180px]">
                    <InputText v-model="name" type="text" class="w-full" placeholder="Tìm kiếm hóa đơn" @input="onSearch" />
                </div>
                <div class="flex flex-col gap-3 flex-1 min-w-[180px]">
                    <InputText v-model="email" type="text" class="w-full" placeholder="Loại hóa đơn" @input="onSearch" />
                </div>
                <div class="flex flex-col gap-3 flex-1 min-w-[180px]">
                    <Calendar v-model="startDate" dateFormat="dd/mm/yy" placeholder="Từ ngày" showIcon @date-select="onSearch" class="w-full" />
                </div>
                <div class="flex flex-col gap-3 flex-1 min-w-[180px]">
                    <Calendar v-model="endDate" dateFormat="dd/mm/yy" placeholder="Đến ngày" showIcon :minDate="startDate" @date-select="onSearch" class="w-full" />
                </div>
                <div class="flex flex-col gap-3 flex-none w-[120px]">
                    <Button label="Làm mới" icon="pi pi-refresh" class="w-full" @click="onReset" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const name = ref('');
const email = ref('');
const startDate = ref(null);
const endDate = ref(null);

watch(startDate, (newVal) => {
    if (endDate.value && newVal && endDate.value < newVal) {
        endDate.value = null;
    }
});

const onSearch = () => {
    console.log('Tìm kiếm:', {
        name: name.value,
        email: email.value,
        start: startDate.value,
        end: endDate.value
    });
};

const onReset = () => {
    name.value = '';
    email.value = '';
    startDate.value = null;
    endDate.value = null;
    console.log('Đã làm mới form');
};
</script>
