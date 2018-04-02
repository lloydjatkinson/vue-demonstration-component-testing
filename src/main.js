import Vue from 'vue';
import ShoppingApplication from './shopping-application.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(ShoppingApplication)
}).$mount('#app');