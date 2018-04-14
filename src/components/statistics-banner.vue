<template>
    <nav class="level">
        <statistics-banner-item :heading="'Types of Product'" :sub-heading="stockProducts.length" />
        <statistics-banner-item :heading="'Stock Quantity'" :sub-heading="stockQuantity" />
        <statistics-banner-item :heading="'Stock Value'" :sub-heading="stockTotalPrice" />
        <statistics-banner-item :heading="'Low Stock'" :sub-heading="lowStockProducts.length" />
        <statistics-banner-item :heading="'Orders'" :sub-heading="'TODO'" />
    </nav>
</template>

<script>
// @ts-check
import { mapGetters } from 'vuex';
import StatisticsBannerItem from './statistics-banner-item.vue';

export default {
    name: 'StatisticsBanner',
    components: {
        StatisticsBannerItem
    },

    computed: {
        ...mapGetters('shoppingModule', [
            'stockProducts',
            'lowStockProducts',
            'stockQuantity',
            'stockTotalPrice'
        ])
    }
}
</script>