import Vue from 'vue';
import Vuex from 'vuex';
import shoppingModule from './store/modules/shopping/shopping-module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        shoppingModule
    }
});
