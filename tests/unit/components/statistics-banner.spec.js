import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import shoppingModule from '../../../src/store/modules/shopping/shopping-module';
import StatisticsBanner from '../../../src/components/statistics-banner.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Statistics Banner', () => {
    let state;
    let store;

    beforeEach(() => {
        state = {
            shoppingModule: {
                stockProducts: [
                    { id: 1, quantity: 1 },
                    { id: 2, quantity: 2 },
                    { id: 3, quantity: 3 }
                ]
            }
        };

        store = new Vuex.Store({
            namespaced: true,
            state,
            getters: shoppingModule.getters
        });
    });

    it('is named correctly', () => {
        const wrapper = shallow(StatisticsBanner, { store, localVue });

        
    });
});