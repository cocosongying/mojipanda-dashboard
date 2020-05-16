import Vue from 'vue';
import Vuex from 'vuex';
import cookie from 'vue-cookies';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        userInfo: {},
        token: "",
        isLogin: cookie.get('isLogin')
    },
    getters: getters,
    mutations: mutations,
    actions: actions
});

export default store;