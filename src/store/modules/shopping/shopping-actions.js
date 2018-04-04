//@ts-check

import {
    ADD_PRODUCT_TO_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,

    ADD_PRODUCT_TO_STOCK,
    REMOVE_PRODUCT_FROM_STOCK,

    EMPTY_BASKET
} from '../../../../src/store/modules/shopping/shopping-mutation-types';

const actions = {
    addProductToBasket ({ commit }, { id, quantityToAdd }) {
        commit(ADD_PRODUCT_TO_BASKET, { id, quantityToAdd });
    },
    removeProductFromBasket ({ commit }, { id, quantityToRemove }) {
        commit(REMOVE_PRODUCT_FROM_BASKET, { id, quantityToRemove });
    },
    addProductToStock ({ commit }, { id, quantityToAdd }) {
        commit(ADD_PRODUCT_TO_STOCK, { id, quantityToAdd });
    },
    removeProductFromStock ({ commit }, { id, quantityToRemove }) {
        commit(REMOVE_PRODUCT_FROM_STOCK, { id, quantityToRemove });
    },
    emptyBasket ({ commit }) {
        commit(EMPTY_BASKET);
    }
};

export default actions;