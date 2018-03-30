import { head } from 'lodash';
import mutations from '../../../../src/store/modules/shopping/shopping-mutations';

const { ADD_PRODUCT_TO_BASKET } = mutations;

describe('Shopping Module Mutations', () => {
    describe('Adding items to shopping basket', () => {
        it('adds single item to empty basket and has valid count', () => {
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
    
        it('adds multiple items to empty basket and has valid quantity', () => {
            const state = {
                basketItems: []
            };
    
            ADD_PRODUCT_TO_BASKET(state, 1, 10);
            ADD_PRODUCT_TO_BASKET(state, 2, 20);
            ADD_PRODUCT_TO_BASKET(state, 3, 30);
            
            expect(state.basketItems).toContainEqual(
                { id: 1, quantity: 10 },
                { id: 2, quantity: 20 },
                { id: 3, quantity: 30 },
            );
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
        
    });
});