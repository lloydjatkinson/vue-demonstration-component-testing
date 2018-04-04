<template>
    <div>
        <nav class="level">
            <div class="left-side">
                <div class="level-item">
                    <b-icon
                        icon="store"
                        size="is-small">
                    </b-icon>
                    <p class="subtitle">Shopping Basket</p>
                </div>
            </div>
        </nav>
        <b-table :data="availableProducts" :columns="productColumns" :hoverable="true"></b-table>
        <button v-on:click="removeProductFromStock({ id: 14, quantityToRemove: 1 })">Test</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'ProductSelection',
    data () {
        return {
            
        };
    },

    computed: {
        ...mapGetters('shoppingStore', [
            'availableProducts'
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
    },

    methods: {
        ...mapActions('shoppingStore', [
            'removeProductFromStock'
        ])
    }
};
</script>