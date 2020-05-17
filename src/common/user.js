import axios from 'axios'
import Consts from '../consts'

const User = {
    async list(params) {
        let url = Consts.Api.BASE_URL + Consts.Api.USER_LIST;
        let res = await axios.post(url, params);
        return res.data;
    },
    async add(params) {
        let url = Consts.Api.BASE_URL + Consts.Api.USER_ADD;
        let res = await axios.post(url, params);
        return res.data;
    },
    async getById(params) {
        let url = Consts.Api.BASE_URL + Consts.Api.USER_GETBY_ID;
        let res = await axios.post(url, params);
        return res.data;
    },
    async updateById(params) {
        let url = Consts.Api.BASE_URL + Consts.Api.USER_UPDATEBY_ID;
        let res = await axios.post(url, params);
        return res.data;
    },
    async resetPasswd(params) {
        let url = Consts.Api.BASE_URL + Consts.Api.USER_RESET_PWD;
        let res = await axios.post(url, params);
        return res.data;
    },
    async modifyPasswd(params) {
        let url = Consts.Api.BASE_URL + Consts.Api.USER_MODIFY_PWD;
        let res = await axios.post(url, params);
        return res.data;
    }
}

export default User