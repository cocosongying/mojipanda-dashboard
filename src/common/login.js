import axios from 'axios'
import Consts from '../consts'
import CryptoUtil from '../util/crypto'

const Login = {
    async doLogin(username, password) {
        password = CryptoUtil.aesEncrypt(password);
        let params = {
            username: username,
            password: password
        }
        let res = await axios.post(Consts.Api.USER_LOGIN, params);
        return res.data;
    }
}

export default Login