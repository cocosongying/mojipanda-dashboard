import cookie from 'vue-cookies';
const mutations = {
    setUserInfo(state, data) {
        state.userInfo = data;
    },
    setToken(state, data) {
        state.token = data;
    },
    setLoginState(state, data) {
        state.isLogin = data;
        cookie.set('isLogin', data);
    }
}
export default mutations