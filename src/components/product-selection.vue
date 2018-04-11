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
            v-bind:data="stockProducts"
            v-bind:columns="productColumns"
            v-bind:hoverable="true">
        </b-table>
        <div class="buttons">
            <button
                v-on:click="addRandom"
                class="button is-success">
                Add
            </button>
            <button
                v-on:click="removeRandom"
                class="button is-warning">
                Remove
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { random } from 'lodash';

export default {
    name: 'ProductSelection',
    data () {
        return {
            
        };
    },

    computed: {
        ...mapGetters('shoppingModule', [
            'stockProducts'
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
        ...mapActions('shoppingModule', [
            'addProductToStock',
            'removeProductFromStock'
        ]),

        addRandom () {
            this.addProductToStock({ id: random(0, 19), quantityToAdd: 1 });
        },

        removeRandom () {
            this.removeProductFromStock({ id: random(0, 19), quantityToRemove: 1 });
        }
    }
};
</script>