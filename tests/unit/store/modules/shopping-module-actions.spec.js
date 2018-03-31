import {
    ADD_PRODUCT_TO_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,

    ADD_PRODUCT_TO_STOCK,
    REMOVE_PRODUCT_FROM_STOCK,

    EMPTY_BASKET
} from '../../../../src/store/modules/shopping/shopping-mutation-types';

import actions from '../../../../src/store/modules/shopping/shopping-actions';

const {
    addProductToBasket,
    removeProductFromBasket,
    addProductToStock,
    removeProductFromStock,
    emptyBasket
} = actions ;

describe('Shopping Module Actions', () => {
    let context = {};

    beforeEach(() => {
        context = {
            state: {},
            rootState: {},
            getters: {},
            rootGetters: {},
            commit: jest.fn(),
            dispatch: jest.fn()
        };
    });

    describe('Adding products to shopping basket', () => {
        it('adds products to shopping basket', () => {
            addProductToBasket(context, { id: 1, quantityToAdd: 2 });

            expect(context.commit).toHaveBeenCalledWith(ADD_PRODUCT_TO_BASKET, 1, 2 );
        });
    });
});