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
        const product = state.basketProducts.find(product => product.id === id);

        if (product) {
            product.quantity += quantityToAdd;
        } else {
            state.basketProducts.push({ id, quantity: quantityToAdd })
        }
    },

    [REMOVE_PRODUCT_FROM_BASKET] (state, id, quantityToRemove) {
        const product = state.basketProducts.find(p => p.id === id);
        
        if (product) {
            product.quantity -= quantityToRemove;

            if (product.quantity <= 0) {
                state.basketProducts = state.basketProducts.filter(p => p.id !== product.id);
            }
        } else {
            // If this happens then the design and tests do not correctly cover all cases.
            throw new TypeError('Unknown ID.');
        }
    },

    [ADD_PRODUCT_TO_STOCK] (state, id, quantityToAdd) {
        const product = state.availableProducts.find(p => p.id === id);

        if (product) {
            product.quantity += quantityToAdd;
        } else {
            state.availableProducts.push({ id, quantity: quantityToAdd });
        }
    },

    [REMOVE_PRODUCT_FROM_STOCK] (state, id, quantityToRemove) {
        const product = state.availableProducts.find(p => p.id === id);

        if (product) {
            product.quantity -= quantityToRemove;

            // Can never truly remove from stock, simply set to zero.
            // Out of stock scenario.
            if (product.quantity <= 0) {
                product.quantity = 0;
            }
        } else {
            // If this happens then the design and tests do not correctly cover all cases.
            throw new TypeError('Unknown ID.');
        }
    },

    [EMPTY_BASKET] (state) {
        state.basketProducts = [];
    }
};

export default mutations;