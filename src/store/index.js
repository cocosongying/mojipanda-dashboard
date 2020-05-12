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
        userInfo: state => state.userInfo,
        isLogin: state => state.isLogin
    },
    mutations: {
        setUserInfo(state, data) {
            state.userInfo = data;
        },
        setLoginState(state, data) {
            state.isLogin = data;
            cookie.set('isLogin', data);
        }
    },
    actions: {
        setUserInfo({ commit }, data) {
            commit('setUserInfo', data);
        },
        setLoginState({ commit }, data) {
            commit('setLoginState', data);
        }
    }
});

export default store;