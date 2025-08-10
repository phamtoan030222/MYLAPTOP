<template>
    <div>
        <!-- Header + buttons -->
        <div class="flex items-center justify-between mb-4">
            <div class="font-semibold text-xl">Giỏ hàng</div>
            <div class="flex gap-3 items-center">
                <Button label="Thêm sản phẩm" icon="pi pi-plus" class="p-button-success" @click="handleAddProduct" />
                <Button label="Quét QR" icon="pi pi-qrcode" class="p-button-info" @click="handleScanQR" />
            </div>
        </div>

        <!-- Bảng DataTable -->
        <div class="card">
            <DataTable
                ref="dt"
                v-model:selection="selectedProducts"
                :value="products"
                dataKey="id"
                :paginator="true"
                :rows="10"
                :rowsPerPageOptions="[5, 10, 25]"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            >
                <Column header="#" style="width: 3rem" :body="(data, options) => options.rowIndex + 1"></Column>

                <Column header="Sản phẩm" style="min-width: 25rem">
                    <template #body="slotProps">
                        <div class="flex items-center gap-3">
                            <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="rounded" style="width: 64px" />
                            <span>{{ slotProps.data.name }}</span>
                        </div>
                    </template>
                </Column>

                <Column field="quantity" header="Số lượng" sortable style="min-width: 10rem"></Column>

                <Column header="Đơn giá" sortable style="min-width: 10rem">
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.price) }}
                    </template>
                </Column>

                <Column header="Thành tiền" style="min-width: 12rem">
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.price * slotProps.data.quantity) }}
                    </template>
                </Column>

                <Column header="Thao tác" style="min-width: 12rem" :exportable="false">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';

const toggle = () => {
    // logic toggle hiện tại của bạn
    console.log('Toggle button clicked');
};

const handleAddProduct = () => {
    console.log('Thêm sản phẩm clicked');
    // Thêm logic thêm sản phẩm ở đây
};

const handleScanQR = () => {
    console.log('Quét QR clicked');
    // Thêm logic quét QR ở đây
};
</script>
