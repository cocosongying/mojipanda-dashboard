import axios from 'axios'
import Consts from '../consts'

const User = {
    async list(params) {
        let res = await axios.post(Consts.Api.USER_LIST, params);
        return res.data;
    },
    async add(params) {
        let res = await axios.post(Consts.Api.USER_ADD, params);
        return res.data;
    },
    async getById(params) {
        let res = await axios.post(Consts.Api.USER_GETBY_ID, params);
        return res.data;
    },
    async updateById(params) {
        let res = await axios.post(Consts.Api.USER_UPDATEBY_ID, params);
        return res.data;
    },
    async resetPasswd(params) {
        let res = await axios.post(Consts.Api.USER_RESET_PWD, params);
        return res.data;
    },
    async modifyPasswd(params) {
        let res = await axios.post(Consts.Api.USER_MODIFY_PWD, params);
        return res.data;
    }
}

export default User