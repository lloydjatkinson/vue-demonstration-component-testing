import { head } from 'lodash';
import mutations from '../../../../src/store/modules/shopping/shopping-mutations';

const { ADD_PRODUCT_TO_BASKET } = mutations;

describe('mutations', () => {
    it('adds single item to empty basket', () => {
        const state = {
            basketItems: []
        };

        ADD_PRODUCT_TO_BASKET(state, 1, 1);

        expect(state.basketItems.length).toBe(2);
    });

    it('adds one item twice one by one to empty basket', () => {
        const state = {
            basketItems: []
        };

        ADD_PRODUCT_TO_BASKET(state, 1, 1);
        ADD_PRODUCT_TO_BASKET(state, 1, 1);

        console.log(state);
        
        expect(state.basketItems[0].quantity).toBe(2);
    });
});