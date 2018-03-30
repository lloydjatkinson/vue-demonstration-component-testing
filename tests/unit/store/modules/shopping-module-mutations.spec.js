import mutations from '../../../../src/store/modules/shopping/shopping-mutations';

const {
    ADD_PRODUCT_TO_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,
    EMPTY_BASKET,
    ADD_PRODUCT_TO_STOCK,
    REMOVE_PRODUCT_FROM_STOCK } = mutations;

describe('Shopping Module Mutations', () => {
    describe('Adding products to shopping basket', () => {
        it('adds single product to empty basket and has valid array length', () => {
            const state = {
                basketProducts: []
            };
    
            ADD_PRODUCT_TO_BASKET(state, 1, 1);
    
            expect(state.basketProducts.length).toBe(1);
        });
    
        it('adds one product twice one by one to empty basket and has valid quantity', () => {
            const state = {
                basketProducts: []
            };
    
            ADD_PRODUCT_TO_BASKET(state, 1, 1);
            ADD_PRODUCT_TO_BASKET(state, 1, 1);
            
            expect(state.basketProducts[0].quantity).toBe(2);
        });
    
        it('adds multiple products to empty basket and has valid quantities', () => {
            const state = {
                basketProducts: []
            };
    
            ADD_PRODUCT_TO_BASKET(state, 1, 10);
            ADD_PRODUCT_TO_BASKET(state, 2, 20);
            ADD_PRODUCT_TO_BASKET(state, 3, 30);
            
            expect(state.basketProducts).toContainEqual({ id: 1, quantity: 10 });
            expect(state.basketProducts).toContainEqual({ id: 2, quantity: 20 });
            expect(state.basketProducts).toContainEqual({ id: 3, quantity: 30 });
        });
    
        it('adds more of the same already present products and has valid quantities', () => {
            const state = {
                basketProducts: [
                    { id: 1, quantity: 5 },
                    { id: 2, quantity: 6 }
                ]
            };
    
            ADD_PRODUCT_TO_BASKET(state, 1, 10);
            ADD_PRODUCT_TO_BASKET(state, 2, 20);
            
            expect(state.basketProducts).toContainEqual({ id: 1, quantity: 15 });
            expect(state.basketProducts).toContainEqual({ id: 2, quantity: 26 });
        });
    });

    describe('Removing products from shopping basket', () => {
        it('removes the single product from basket and has valid array length', () => {
            const state = {
                basketProducts: [{ id: 1, quantity: 1 }]
            };

            REMOVE_PRODUCT_FROM_BASKET(state, 1, 1);

            expect(state.basketProducts.length).toBe(0);
        });

        it('removes one product twice one by one from basket and has valid quantity', () => {
            const state = {
                basketProducts: [{ id: 1, quantity: 2}]
            };

            REMOVE_PRODUCT_FROM_BASKET(state, 1, 1);
            REMOVE_PRODUCT_FROM_BASKET(state, 1, 1);

            expect(state.basketProducts.length).toBe(0);
        });

        it('removes some of the same already present products from basket and has valid quantities', () => {
            const state = {
                basketProducts: [
                    { id: 1, quantity: 10 },
                    { id: 2, quantity: 20 },
                    { id: 3, quantity: 30 }
                ]
            };

            REMOVE_PRODUCT_FROM_BASKET(state, 1, 5);
            REMOVE_PRODUCT_FROM_BASKET(state, 2, 10);
            REMOVE_PRODUCT_FROM_BASKET(state, 3, 15);

            expect(state.basketProducts).toContainEqual({ id: 1, quantity: 5 });
            expect(state.basketProducts).toContainEqual({ id: 2, quantity: 10 });
            expect(state.basketProducts).toContainEqual({ id: 3, quantity: 15 });
        });

        it('empties the basket and has valid array length', () => {
            const state = {
                basketProducts: [
                    { id: 1, quantity: 10 },
                    { id: 2, quantity: 20 },
                    { id: 3, quantity: 30 }
                ]
            };

            EMPTY_BASKET(state);

            expect(state.basketProducts.length).toBe(0);
        });
    });

    describe('Adding products to stock', () => {
        it('adds single product to empty stock and has valid array length', () => {
            const state = {
                availableProducts: []
            };

            ADD_PRODUCT_TO_STOCK(state, 1, 1);

            expect(state.availableProducts.length).toBe(1);
        });

        it('adds one product twice one by one to empty stock and has valid quantity', () => {
            const state = {
                availableProducts: []
            };

            ADD_PRODUCT_TO_STOCK(state, 1, 1);
            ADD_PRODUCT_TO_STOCK(state, 1, 1);

            expect(state.availableProducts.length).toBe(1);
            expect(state.availableProducts).toContainEqual({ id: 1, quantity: 2 });
        });

        it('adds multiple products to empty stock and has valid quantities', () => {
            const state = {
                availableProducts: []
            };

            ADD_PRODUCT_TO_STOCK(state, 1, 10);
            ADD_PRODUCT_TO_STOCK(state, 2, 20);
            ADD_PRODUCT_TO_STOCK(state, 3, 30);

            expect(state.availableProducts).toContainEqual({ id: 1, quantity: 10 });
            expect(state.availableProducts).toContainEqual({ id: 2, quantity: 20 });
            expect(state.availableProducts).toContainEqual({ id: 3, quantity: 30 });
        });
    });

    describe('Removing products from stock', () => {
        it('removes the single product from stock and has valid array length', () => {
            const state = {
                availableProducts: [{ id: 1, quantity: 1 }]
            };

            REMOVE_PRODUCT_FROM_STOCK(state, 1, 1);

            expect(state.availableProducts.length).toBe(1);
            expect(state.availableProducts).toContainEqual({ id: 1, quantity: 0 });
        });

        it('removes one product twice one by one from stock and has valid quantity', () => {
            const state = {
                availableProducts: [{ id: 1, quantity: 2 }]
            };

            REMOVE_PRODUCT_FROM_STOCK(state, 1, 1);
            REMOVE_PRODUCT_FROM_STOCK(state, 1, 1);

            expect(state.availableProducts.length).toBe(1);
            expect(state.availableProducts).toContainEqual({ id: 1, quantity: 0 });
        });

        it('removes some of the same already present products from stock and has valid quantities', () => {
            const state = {
                availableProducts: [
                    { id: 1, quantity: 10 },
                    { id: 2, quantity: 20 },
                    { id: 3, quantity: 30 }
                ]
            };

            REMOVE_PRODUCT_FROM_STOCK(state, 1, 10);
            REMOVE_PRODUCT_FROM_STOCK(state, 2, 5);
            REMOVE_PRODUCT_FROM_STOCK(state, 3, 25);

            expect(state.availableProducts.length).toBe(3);
            expect(state.availableProducts).toContainEqual({ id: 1, quantity: 0 });
            expect(state.availableProducts).toContainEqual({ id: 2, quantity: 15 });
            expect(state.availableProducts).toContainEqual({ id: 3, quantity: 5 });
        });

        it('removes products from stock and clamps quantity to zero', () => {
            const state = {
                availableProducts: [{ id: 1, quantity: 10 }]
            };
            
            REMOVE_PRODUCT_FROM_STOCK(state, 1, 20);

            expect(state.availableProducts.length).toBe(1);
            expect(state.availableProducts).toContainEqual({ id: 1, quantity: 0 });
        });
    });

    describe('Adding and removing products from shopping basket and stock', () => {
        it('adds and removes products from shopping basket and maintains correct quantities', () => {
            const state = {
                basketProducts: [
                    { id: 10, quantity: 8 },
                    { id: 11, quantity: 15 },
                    { id: 14, quantity: 40 }
                ]
            };

            ADD_PRODUCT_TO_BASKET(state, 10, 1);
            expect(state.basketProducts).toContainEqual({ id: 10, quantity: 9 });
            expect(state.basketProducts).toContainEqual({ id: 14, quantity: 40 });

            REMOVE_PRODUCT_FROM_BASKET(state, 10, 5);
            expect(state.basketProducts).toContainEqual({ id: 10, quantity: 4 });
            expect(state.basketProducts).toContainEqual({ id: 14, quantity: 40 });
        });

        it('adds and removes products from stock and maintains correct quantities', () => {
            const state = {
                availableProducts: [
                    { id: 10, quantity: 8 },
                    { id: 11, quantity: 15 },
                    { id: 14, quantity: 40 }
                ]
            };

            ADD_PRODUCT_TO_STOCK(state, 10, 1);
            expect(state.availableProducts).toContainEqual({ id: 10, quantity: 9 });
            expect(state.availableProducts).toContainEqual({ id: 14, quantity: 40 });

            REMOVE_PRODUCT_FROM_STOCK(state, 10, 5);
            expect(state.availableProducts).toContainEqual({ id: 10, quantity: 4 });
            expect(state.availableProducts).toContainEqual({ id: 14, quantity: 40 });


        });
    });

    describe('Validates IDs and throws', () => {
        it('throws when removing an unknown ID from basket', () => {
            const state = {
                basketProducts: [{ id: 1, quantity: 1 }]
            };

            expect(() => {
                REMOVE_PRODUCT_FROM_BASKET(state, 2, 1);
            }).toThrow('Unknown ID.');
        });

        it('throws when removing an unknown ID from stock', () => {
            const state = {
                availableProducts: [{ id: 1, quantity: 1 }]
            };

            expect(() => {
                REMOVE_PRODUCT_FROM_STOCK(state, 2, 1);
            }).toThrow('Unknown ID.');
        });
    });
}); 