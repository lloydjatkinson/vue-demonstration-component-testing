import getters from '../../../../src/store/modules/shopping/shopping-getters';

const {
    availableProducts,
    basketProducts,
    lowStockProducts,
    basketProductCount,
    basketQuantityTotal,
    basketPriceTotal
} = getters;

describe('Shopping Module Getters', () => {
    it('gets the available products', () => {
        const state = {
            availableProducts: [
                { id: 1, quantity: 1 },
                { id: 2, quantity: 2 },
                { id: 3, quantity: 3 }
            ]
        };

        const result = availableProducts(state);

        expect(result).toContainEqual({ id: 1, quantity: 1 });
        expect(result).toContainEqual({ id: 2, quantity: 2 });
        expect(result).toContainEqual({ id: 3, quantity: 3 });
    });

    it('gets the basket products', () => {
        const state = {
            availableProducts: [
                { id: 1, name: 'Test 1', price: 5, quantity: 10 },
                { id: 2, name: 'Test 2', price: 10, quantity: 10 },
                { id: 3, name: 'Test 3', price: 20, quantity: 11 }
            ],
            basketProducts: [
                { id: 1, quantity: 1 },
                { id: 2, quantity: 2 },
                { id: 3, quantity: 3 }
            ]
        };

        const result = basketProducts(state);

        expect(result).toContainEqual({ id: 1, name: 'Test 1', price: 5, quantity: 1, total: 5 });
        expect(result).toContainEqual({ id: 2, name: 'Test 2', price: 10, quantity: 2, total: 20 });
        expect(result).toContainEqual({ id: 3, name: 'Test 3', price: 20, quantity: 3, total: 60 });
    });

    it('throws when getting products that have invalid ID', () => {
        const state = {
            availableProducts: [
                { id: 1, name: 'Test 1', price: 5, quantity: 10 },
                { id: 2, name: 'Test 2', price: 10, quantity: 10 },
                { id: 3, name: 'Test 3', price: 20, quantity: 11 }
            ],
            basketProducts: [
                { id: 1, quantity: 1 },
                { id: 2, quantity: 2 },
                { id: 30, quantity: 3 }
            ]
        };

        expect(() => {
            basketProducts(state);
        }).toThrow('Unknown ID.');
    });

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