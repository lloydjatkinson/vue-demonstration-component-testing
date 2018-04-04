<template>
    <div>
        <nav class="level">
            <div class="left-side">
                <div class="level-item">
                    <b-icon
                        icon="cart"
                        size="is-small">
                    </b-icon>
                    <p class="subtitle">Shopping Basket</p>
                </div>
            </div>
        </nav>

        <!-- <div v-if>
        </div> -->
        <b-message type="is-info" v-if="!basketContainsProducts">
            Add some items to get started!
        </b-message>
        <ul>
            <li
                v-for="(item, index) in basketProducts"
                :key="index">
                {{ item.name }} - [x{{ item.quantity }}]
            </li>
        </ul>
    </div>
</template>

<script>
// @ts-check
import { mapGetters } from 'vuex';

export default {
    name: 'ShoppingBasket',
    data () {
        return {

        };
    },
    computed: {
        ...mapGetters('shoppingStore', [
            'basketProducts',
            'basketContainsProducts'
        ])
    }
};
</script>

<style>

</style>