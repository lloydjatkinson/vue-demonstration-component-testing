<template>
    <div>
        <nav class="level is-mobile">
            <div class="left-side">
                <div class="level-item">
                    <b-icon
                        icon="store"
                        size="is-small">
                    </b-icon>
                    <p class="subtitle">Stock</p>
                </div>
            </div>
        </nav>
        <b-table
            v-bind:data="availableProducts"
            v-bind:columns="productColumns"
            v-bind:hoverable="true">
        </b-table>
        <button
            v-on:click="removeProductFromStock({ id: 14, quantityToRemove: 1 })"
            class="button is-success">
            Test
        </button>
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