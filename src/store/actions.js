const actions = {
    setUserInfo({ commit }, data) {
        commit('setUserInfo', data);
    },
    setToken({ commit }, data) {
        commit('setToken', data);
    },
    setLoginState({ commit }, data) {
        commit('setLoginState', data);
    }
}
export default actions