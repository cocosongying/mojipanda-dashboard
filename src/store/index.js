import Vue from 'vue';
import Vuex from 'vuex';
import cookie from 'vue-cookies';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        userInfo: {},
        isLogin: cookie.get('isLogin')
    },
    getters: {
        isLogin: state => state.isLogin
    },
    mutations: {
        setLoginState(state, data) {
            state.isLogin = data;
            cookie.set('isLogin', data);
        }
    },
    actions: {
        setLoginState({ commit }, data) {
            commit('setLoginState', data);
        }
    }
});

export default store;