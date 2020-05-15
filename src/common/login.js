import axios from 'axios'
import Consts from '../consts'
import CryptoUtil from '../util/crypto'

const Login = {
    async doLogin(username, password) {
        password = CryptoUtil.aesEncrypt(password);
        let url = Consts.Api.BASE_URL + Consts.Api.USER_LOGIN;
        let params = {
            username: username,
            password: password
        }
        let res = await axios.post(url, params);
        return res.data;
    }
}

export default Login