import 'babel-polyfill';
import { shallow, mount } from '@vue/test-utils';
import StatisticsBannerItem from '../../../src/components/statistics-banner-item.vue';


describe('Statistics Banner Item', () => {
    const propsData = {
        heading: 'Test Heading',
        subHeading: 'Test Subheading'
    };

    it('renders item with correct DOM', () => {
        const wrapper = shallow(StatisticsBannerItem, { propsData });
        
        expect(wrapper.findAll('div').length).toBe(2);
        expect(wrapper.findAll('p').length).toBe(2);
    });
    
    it('renders item with correct CSS classes', () => {
        const wrapper = shallow(StatisticsBannerItem, { propsData });
        
        expect(wrapper.findAll('.level-item').length).toBe(1);
        expect(wrapper.findAll('.heading').length).toBe(1);
        expect(wrapper.findAll('.title').length).toBe(1);
    });


    it('renders item with props data correctly', () => {
        const wrapper = shallow(StatisticsBannerItem, { propsData });
        
        expect(wrapper.findAll('p').at(0).text()).toBe(propsData.heading);
        expect(wrapper.findAll('p').at(1).text()).toBe(propsData.subHeading);
    });
});