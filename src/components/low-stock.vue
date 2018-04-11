<template>
    <div>
        <nav class="level is-mobile">
            <div class="left-side">
                <div class="level-item">
                    <b-icon
                        icon="store"
                        size="is-small">
                    </b-icon>
                    <p class="subtitle">Low Stock</p>
                </div>
            </div>
        </nav>
        <b-table :data="lowStockProducts" :columns="productColumns" :hoverable="true"></b-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'LowStock',
    data () {
        return {
            
        };
    },

    computed: {
        ...mapGetters('shoppingModule', [
            'lowStockProducts'
        ]),

        productColumns () {
            return [
                {
                    field: 'id',
                    label: 'ID',
                    numeric: true
                },
                {
                    field: 'name',
                    label: 'Name'
                },
                {
                    field: 'quantity',
                    label: 'Quantity',
                    numeric: true
                },
                {
                    field: 'price',
                    label: 'Price',
                    numeric: true
                }
            ];
        }
    }
};
</script>

<style>

</style>
