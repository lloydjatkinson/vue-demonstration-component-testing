import 'babel-polyfill';
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import ShoppingApplication from './shopping-application.vue';
import store from './store';
import { random } from 'lodash';

Vue.config.performance = true;
Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
    store,
    render: h => h(ShoppingApplication)
}).$mount('#app');

// const example = () => {
//     store.dispatch("shoppingModule/addProductToStock" , { id: random(0, 20), quantityToAdd: random(0, 20) });
// };
// const timerId = setInterval(example);
