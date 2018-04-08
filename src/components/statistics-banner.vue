<template>
    <nav class="level">
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Types of Product</p>
                <p class="title">{{ stockProducts.length }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Stock Quantity</p>
                <p class="title">TODO</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Stock Value</p>
                <p class="title">TODO</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Low Stock</p>
                <p class="title">{{ lowStockProducts.length }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Orders</p>
                <p class="title">TODO</p>
            </div>
        </div>
    </nav>
</template>

<script>
// @ts-check
import { mapGetters } from 'vuex';

export default {
    name: 'StatisticsBanner',
    data () {
        return {

        }
    },
    
    computed: {
        ...mapGetters('shoppingStore', [
            'stockProducts',
            'lowStockProducts'
        ])
    }
}
</script>

<style>

</style>