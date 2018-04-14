// import 'babel-polyfill';
import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
// import shoppingModule from '../../../src/store/modules/shopping/shopping-module';
import StatisticsBanner from '../../../src/components/statistics-banner.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Statistics Banner', () => {
    describe('getters', () => {
        let state;
        let store;
    
        // Option 1: Import getters, setup store/state, and test.
        // Not really necessary - we aren't testing the getters here (we already test them), we're testing the components/UI.
        // beforeEach(() => {
        //     store = new Vuex.Store({
        //         modules: {
        //             shoppingModule: {
        //                 namespaced: true,
        //                 state: {
        //                     stockProducts: [
        //                         { id: 1, quantity: 1 }
        //                     ]
        //                 },
        //                 getters: shoppingModule.getters
        //             }
        //         }
        //     });
        // });

        // Option 2: Still have state but mock getters.

        // Option 3: Mock the getters, setup store, and test.
        beforeEach(() => {
            store = new Vuex.Store({
                modules: {
                    shoppingModule: {
                        namespaced: true,
                        getters: {
                            stockProducts: () => {
                                return [
                                    { id: 1, quantity: 20 },
                                    { id: 2, quantity: 5 }
                                ];
                            },
                            lowStockProducts: () => {
                                return [
                                    { id: 2, quantity: 5 }
                                ];
                            },
                            stockQuantity: () => {
                                return 100;
                            },
                            stockTotalPrice: () => {
                                return 100;
                            }
                        }
                    }
                }
            });
        });
    
        it('is named correctly', () => {
            const wrapper = shallow(StatisticsBanner, { store, localVue });
            expect(wrapper.name()).toBe('StatisticsBanner');
        });

        // it('renders five items', () => {
        //     const wrapper = shallow(StatisticsBanner, { store, localVue });
        //     expect(wrapper.findAll('.level-item').length).toBe(5);
        // });
    });
});