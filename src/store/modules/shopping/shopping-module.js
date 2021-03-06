// @ts-check
import state from './shopping-state';
import mutations from './shopping-mutations';
import getters from './shopping-getters';
import actions from './shopping-actions';

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};