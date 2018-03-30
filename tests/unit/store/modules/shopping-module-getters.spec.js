import getters from '../../../../src/store/modules/shopping/shopping-getters';

const {
    lowStockProducts,
    basketProductCount,
    basketQuantityTotal,
    basketPriceTotal } = getters;

describe('Shopping Module Getters', () => {
    it('gets correct number of low stock items', () => {
        const state = {
            availableProducts: [
                { id: 1, quantity: 8 },
                { id: 2, quantity: 10 },
                { id: 3, quantity: 20 },
                { id: 4, quantity: 0 }
            ]
        };

        const result = lowStockProducts(state);

        expect(result).toContainEqual({ id: 1, quantity: 8 });
        expect(result).toContainEqual({ id: 4, quantity: 0 });
    });

    it('gets correct number of basket products', () => {
        const state = {
            basketProducts: [
                { id: 1, quantity: 8 },
                { id: 2, quantity: 10 },
                { id: 3, quantity: 20 },
                { id: 4, quantity: 0 }
            ]
        };

        const result = basketProductCount(state);

        expect(result).toBe(4);
    });

    it('gets correct basket total quantity via reducer', () => {
        const state = {
            basketProducts: [
                { id: 1, quantity: 8 },
                { id: 2, quantity: 10 },
                { id: 3, quantity: 20 },
                { id: 4, quantity: 0 }
            ]
        };

        const result = basketQuantityTotal(state);

        expect(result).toBe(38);
    });

    it('gets correct basket total price via reducer', () => {
        const state = {
            availableProducts: [
                { id: 0, price: 5 },
                { id: 1, price: 8 },
                { id: 2, price: 10 }
            ],
            basketProducts: [
                { id: 0, quantity: 10 },
                { id: 1, quantity: 15 },
                { id: 2, quantity: 20 }
            ]
        };

        const result = basketPriceTotal(state);

        expect(result).toBe(370);
    });
});