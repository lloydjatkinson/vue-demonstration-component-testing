import mutations from '../../../../src/store/modules/shopping/shopping-mutations';

const {
    ADD_PRODUCT_TO_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,
    EMPTY_BASKET,
    ADD_PRODUCT_TO_STOCK } = mutations;

describe('Shopping Module Mutations', () => {
    describe('Adding items to shopping basket', () => {
        it('adds single item to empty basket and has valid array length', () => {
            const state = {
                basketItems: []
            };
    
            ADD_PRODUCT_TO_BASKET(state, 1, 1);
    
            expect(state.basketItems.length).toBe(1);
        });
    
        it('adds one item twice one by one to empty basket and has valid quantity', () => {
            const state = {
                basketItems: []
            };
    
            ADD_PRODUCT_TO_BASKET(state, 1, 1);
            ADD_PRODUCT_TO_BASKET(state, 1, 1);
            
            expect(state.basketItems[0].quantity).toBe(2);
        });
    
        it('adds multiple items to empty basket and has valid quantities', () => {
            const state = {
                basketItems: []
            };
    
            ADD_PRODUCT_TO_BASKET(state, 1, 10);
            ADD_PRODUCT_TO_BASKET(state, 2, 20);
            ADD_PRODUCT_TO_BASKET(state, 3, 30);
            
            expect(state.basketItems).toContainEqual({ id: 1, quantity: 10 });
            expect(state.basketItems).toContainEqual({ id: 2, quantity: 20 });
            expect(state.basketItems).toContainEqual({ id: 3, quantity: 30 });
        });
    
        it('adds more of the same already present items and has valid quantities', () => {
            const state = {
                basketItems: [
                    { id: 1, quantity: 5 },
                    { id: 2, quantity: 6 }
                ]
            };
    
            ADD_PRODUCT_TO_BASKET(state, 1, 10);
            ADD_PRODUCT_TO_BASKET(state, 2, 20);
            
            expect(state.basketItems).toContainEqual({ id: 1, quantity: 15 });
            expect(state.basketItems).toContainEqual({ id: 2, quantity: 26 });
        });
    });

    describe('Removing items from shopping basket', () => {
        it('removes the single item from basket and has valid array length', () => {
            const state = {
                basketItems: [{ id: 1, quantity: 1}]
            };

            REMOVE_PRODUCT_FROM_BASKET(state, 1, 1);

            expect(state.basketItems.length).toBe(0);
        });

        it('removes one item twice one by one from basket and has valid quantity', () => {
            const state = {
                basketItems: [{ id: 1, quantity: 2}]
            };

            REMOVE_PRODUCT_FROM_BASKET(state, 1, 1);
            REMOVE_PRODUCT_FROM_BASKET(state, 1, 1);

            expect(state.basketItems.length).toBe(0);
        });

        it('removes some of the same already present items from basket and has valid quantities', () => {
            const state = {
                basketItems: [
                    { id: 1, quantity: 10 },
                    { id: 2, quantity: 20 },
                    { id: 3, quantity: 30 }
                ]
            };

            REMOVE_PRODUCT_FROM_BASKET(state, 1, 5);
            REMOVE_PRODUCT_FROM_BASKET(state, 2, 10);
            REMOVE_PRODUCT_FROM_BASKET(state, 3, 15);

            expect(state.basketItems).toContainEqual({ id: 1, quantity: 5 });
            expect(state.basketItems).toContainEqual({ id: 2, quantity: 10 });
            expect(state.basketItems).toContainEqual({ id: 3, quantity: 15 });
        });

        it('empties the basket and has valid array length', () => {
            const state = {
                basketItems: [
                    { id: 1, quantity: 10 },
                    { id: 2, quantity: 20 },
                    { id: 3, quantity: 30 }
                ]
            };

            EMPTY_BASKET(state);

            expect(state.basketItems.length).toBe(0);
        });
    });

    describe('Adding items to stock', () => {
        it('adds single item to empty stock and has valid array length', () => {
            const state = {
                availableProducts: []
            };

            ADD_PRODUCT_TO_STOCK(state, 1, 1);

            expect(state.availableProducts.length).toBe(1);
        });

        it('adds one item twice one by one to empty stock and has valid quantity', () => {
            const state = {
                availableProducts: []
            };

            ADD_PRODUCT_TO_STOCK(state, 1, 1);
            ADD_PRODUCT_TO_STOCK(state, 1, 1);

            expect(state.availableProducts.length).toBe(1);
            expect(state.availableProducts).toContainEqual({ id: 1, quantity: 2 });
        });

        it('adds multiple items to empty stock and has valid quantities', () => {
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
});