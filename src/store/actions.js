const actions = {
    setUserInfo({ commit }, data) {
        commit('setUserInfo', data);
    },
    setLoginState({ commit }, data) {
        commit('setLoginState', data);
    }
}
export default actions