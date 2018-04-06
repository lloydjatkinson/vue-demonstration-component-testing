import 'babel-polyfill';
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import ShoppingApplication from './shopping-application.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
    store,
    render: h => h(ShoppingApplication)
}).$mount('#app');

// const example = () => {
//     store.dispatch("shoppingStore/addProductToStock" , { id: 1, quantityToAdd: 1 });
// };
// const timerId = setInterval(example, 500);