import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import actions from '../../../src/store/modules/shopping/shopping-actions';
import StatisticsBanner from '../../../src/components/statistics-banner.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Statistics Banner', () => {
    beforeEach(() => {
        actions = {

        };
    });

    it('named correctly', () => {
        const wrapper = shallow(StatisticsBanner);

        
    });
});