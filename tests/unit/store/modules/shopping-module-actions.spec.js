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
        it('commits correct mutation and adds products to shopping basket', () => {
            addProductToBasket(context, { id: 1, quantityToAdd: 2 });

            expect(context.commit).toHaveBeenCalledWith(ADD_PRODUCT_TO_BASKET, { id: 1, quantityToAdd: 2 });
        });
    });

    describe('Removing products from shopping basket', () => {
        it('commits correct mutation and removes products from shopping basket', () => {
            context.state = {
                basketProducts: [{ id: 1, quantity: 2 }]
            };

            removeProductFromBasket(context, { id: 1, quantityToRemove: 2 });

            expect(context.commit).toHaveBeenCalledWith(REMOVE_PRODUCT_FROM_BASKET, { id: 1, quantityToRemove: 2 });
        });

        it('commits the correct mutation and empties the shopping basket', () => {
            context.state = {
                basketProducts: [
                    { id: 1, quantity: 10 },
                    { id: 2, quantity: 20 },
                    { id: 3, quantity: 30 }
                ]
            };

            emptyBasket(context);
            expect(context.commit).toHaveBeenCalledWith(EMPTY_BASKET);
        });
    });

    describe('Adding products to stock', () => {
        it('commits correct mutation and adds products to stock', () => {
            context.state = {
                basketProducts: [{ id: 1, quantity: 2 }]
            };

            addProductToStock(context, { id: 1, quantityToAdd: 2 });

            expect(context.commit).toHaveBeenCalledWith(ADD_PRODUCT_TO_STOCK, { id: 1, quantityToAdd: 2 });
        });
    });

    describe('Removing products from stock', () => {
        it('commits correct mutation and removes products to stock', () => {
            context.state = {
                basketProducts: [{ id: 1, quantity: 2 }]
            };

            removeProductFromStock(context, { id: 1, quantityToRemove: 2 });

            expect(context.commit).toHaveBeenCalledWith(REMOVE_PRODUCT_FROM_STOCK, { id: 1, quantityToRemove: 2 });
        });
    });
});