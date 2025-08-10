<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">Danh sách đơn hàng</div>

        <DataTable :value="orders" :paginator="true" :rows="10" dataKey="id" :rowHover="true" :loading="loading" showGridlines class="custom-datatable">
            <!-- Cột # (STT) -->
            <Column header="#" style="width: 3rem" :body="(rowData, options) => options.rowIndex + 1" />

            <!-- Cột mã -->
            <Column field="code" header="Mã" style="min-width: 8rem" />

            <!-- Tên nhân viên -->
            <Column field="employeeName" header="Tên nhân viên" style="min-width: 12rem" />

            <!-- Tên khách hàng -->
            <Column field="customerName" header="Tên khách hàng" style="min-width: 12rem" />

            <!-- Số điện thoại -->
            <Column field="phone" header="Số điện thoại" style="min-width: 10rem" />

            <!-- Tổng tiền -->
            <Column field="totalAmount" header="Tổng tiền" style="min-width: 10rem" :body="(rowData) => formatCurrency(rowData.totalAmount)" />

            <!-- Ngày tạo -->
            <Column field="createdDate" header="Ngày tạo" style="min-width: 10rem" :body="(rowData) => formatDate(rowData.createdDate)" />

            <!-- Trạng thái -->
            <Column header="Trạng thái" style="min-width: 10rem">
                <template #body="{ data: rowData }">
                    <Tag :value="rowData.status" :severity="getStatusSeverity(rowData.status)" />
                </template>
            </Column>

            <!-- Thao tác -->
            <Column header="Thao tác" style="width: 8rem" :sortable="false">
                <template #body="{ data: rowData }">
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-text p-button-info mr-2" @click="onEdit(rowData)" aria-label="Edit" />
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-text p-button-danger" @click="onDelete(rowData)" aria-label="Delete" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

const orders = ref([
    {
        id: 1,
        code: 'ORD001',
        employeeName: 'Nguyễn Văn A',
        customerName: 'Trần Thị B',
        phone: '0912345678',
        totalAmount: 1500000,
        createdDate: new Date('2023-08-01'),
        status: 'Chờ xác nhận'
    },
    {
        id: 2,
        code: 'ORD002',
        employeeName: 'Lê Thị C',
        customerName: 'Phạm Văn D',
        phone: '0987654321',
        totalAmount: 2500000,
        createdDate: new Date('2023-08-05'),
        status: 'Đã hoàn thành'
    }
]);

const loading = ref(false);

function formatCurrency(value) {
    if (value == null) return '';
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(value);
}

function formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('vi-VN');
}

function getStatusSeverity(status) {
    switch (status) {
        case 'Chờ xác nhận':
            return 'warning';
        case 'Chờ giao hàng':
        case 'Đang giao':
            return 'info';
        case 'Đã hoàn thành':
        case 'Đã thanh toán':
            return 'success';
        case 'Đã hủy':
            return 'danger';
        default:
            return null;
    }
}

function onEdit(row) {
    alert(`Bạn chọn chỉnh sửa đơn hàng ${row.code}`);
}

function onDelete(row) {
    alert(`Bạn chọn xóa đơn hàng ${row.code}`);
}
</script>

<style scoped>
.custom-datatable {
    border: 1px solid #d1d5db; /* viền nhẹ quanh bảng */
    border-radius: 8px;
    overflow: hidden;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    box-shadow: 0 2px 6px rgb(0 0 0 / 0.05);
}

.custom-datatable .p-datatable-thead > tr > th {
    background-color: #f9fafb; /* nền header sáng nhẹ */
    color: #111827; /* chữ đậm tối, dễ đọc */
    font-weight: 700;
    border-bottom: 2px solid #e5e7eb;
    text-align: center;
    padding: 0.75rem 1rem;
    user-select: none;
    letter-spacing: 0.02em;
}

.custom-datatable .p-datatable-tbody > tr:hover {
    background-color: #f3f4f6; /* hover nhẹ nhàng */
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
}

.custom-datatable .p-datatable-tbody > tr > td {
    padding: 0.75rem 1rem;
    vertical-align: middle;
    text-align: center;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
}

.custom-datatable .p-datatable-tbody > tr > td:nth-child(3),
.custom-datatable .p-datatable-tbody > tr > td:nth-child(4) {
    text-align: left; /* canh trái cho tên nhân viên và khách hàng */
    color: #1f2937;
    font-weight: 600;
}

.p-button-text.p-button-info {
    color: #2563eb;
    transition: color 0.3s ease;
}

.p-button-text.p-button-info:hover {
    color: #1d4ed8;
    background-color: rgba(37, 99, 235, 0.1);
    border-radius: 50%;
}

.p-button-text.p-button-danger {
    color: #dc2626;
    transition: color 0.3s ease;
}

.p-button-text.p-button-danger:hover {
    color: #b91c1c;
    background-color: rgba(220, 38, 38, 0.1);
    border-radius: 50%;
}

.tag {
    font-weight: 600;
    font-size: 0.875rem;
    padding: 0.25em 0.75em;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    user-select: none;
    box-shadow: 0 1px 2px rgb(0 0 0 / 0.1);
}

.p-tag-success {
    background-color: #d1fae5;
    color: #065f46;
    border: 1px solid #10b981;
}

.p-tag-warning {
    background-color: #fef3c7;
    color: #92400e;
    border: 1px solid #f59e0b;
}

.p-tag-info {
    background-color: #dbeafe;
    color: #1e40af;
    border: 1px solid #3b82f6;
}

.p-tag-danger {
    background-color: #fee2e2;
    color: #991b1b;
    border: 1px solid #ef4444;
}

/* Responsive */
@media (max-width: 768px) {
    .custom-datatable .p-datatable-thead > tr > th,
    .custom-datatable .p-datatable-tbody > tr > td {
        font-size: 12px;
        padding: 0.5rem 0.75rem;
    }
}
</style>
