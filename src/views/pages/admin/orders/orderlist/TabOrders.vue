<script setup lang="ts">
import TableOrders from './TableOrders.vue';
</script>

<template>
    <div class="card mt-4">
        <div class="font-semibold text-xl mb-4"><i class="pi pi-shopping-bag"></i> Danh sách đơn hàng</div>
        <Tabs value="0">
            <TabList>
                <Tab value="0">
                    <Button label="Tất cả" icon="pi pi-list" severity="secondary" badge="8" class="tab-button badge-topright" />
                </Tab>

                <Tab value="1">
                    <Button label="Chờ xác nhận" icon="pi pi-clock" severity="warning" badge="8" class="tab-button badge-topright" />
                </Tab>

                <Tab value="2">
                    <Button label="Chờ giao hàng" icon="pi pi-truck" severity="info" badge="8" class="tab-button badge-topright" />
                </Tab>

                <Tab value="3">
                    <Button label="Đang giao" icon="pi pi-spin pi-truck" severity="info" badge="8" class="tab-button badge-topright" />
                </Tab>

                <Tab value="4">
                    <Button label="Đã hoàn thành" icon="pi pi-check-circle" severity="success" badge="8" class="tab-button badge-topright" />
                </Tab>

                <Tab value="5">
                    <Button label="Đã hủy" icon="pi pi-times-circle" severity="danger" badge="8" class="tab-button badge-topright" />
                </Tab>

                <Tab value="6">
                    <Button label="Đã thanh toán" icon="pi pi-wallet" severity="success" badge="8" class="tab-button badge-topright" />
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <TableOrders />
                </TabPanel>
                <TabPanel value="1">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel value="2">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<style scoped>
.custom-tablist {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: flex-start;
}

.tab-button {
    position: relative; /* Quan trọng để badge định vị tuyệt đối */
    white-space: nowrap;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.3rem 0.75rem;
    font-size: 0.875rem;
}

/* Tùy chỉnh badge vị trí góc trên bên phải */
.tab-button .p-badge {
    position: absolute !important;
    top: 0.25rem;
    right: 0.25rem;
    transform: translate(50%, -50%);
    font-size: 0.65rem;
    padding: 0.2em 0.4em;
    border-radius: 9999px;
    pointer-events: none; /* tránh badge cản click */
    line-height: 1;
}
</style>
