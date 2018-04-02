import Vue from 'vue';
import Vuex from 'vuex';
import shoppingStore from './store/modules/shopping/shopping-store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        shoppingStore
    }
});
