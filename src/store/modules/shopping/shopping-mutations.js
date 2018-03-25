// @ts-check
import { clamp } from 'lodash';
import {
    ADD_PRODUCT_TO_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,

    ADD_PRODUCT_TO_STOCK,
    REMOVE_PRODUCT_FROM_STOCK,

    EMPTY_BASKET
} from './shopping-mutation-types';

const mutations = {
    [ADD_PRODUCT_TO_BASKET] (state, id, quantityToAdd) {
        const product = state.basketItems.find(product => product.id === id);

        if (product) {
            product.quantity = quantityToAdd;
        } else {
            state.basketItems.push({ id, quantity: quantityToAdd })
        }
    },

    [REMOVE_PRODUCT_FROM_BASKET] (state, id, quantityToRemove) {
        const product = state.basketItems.find(product => product.id === id);
        
        if (product) {
            product.quantity -= quantityToRemove;
        }

        if (product.quantity >= 0) {
            // remove with splice
        }
    },

    [ADD_PRODUCT_TO_STOCK] (state, id, quantityToAdd) {

    },

    [REMOVE_PRODUCT_FROM_STOCK] (state, id, quantityToRemove) {

    },

    [EMPTY_BASKET] (state) {
        state.basketItems = [];
    }
}

export default mutations;