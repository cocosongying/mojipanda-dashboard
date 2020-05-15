import CryptoJs from 'crypto-js'
const AES_KEY = 'cglc80qphkh18cllie';

const CryptoUtil = {
    aesDecrypt(data, key) {
        let res = CryptoJs.AES.decrypt(data, key || AES_KEY);
        return res.toString(CryptoJs.enc.Utf8);
    },
    aesEncrypt(data, key) {
        let res = CryptoJs.AES.encrypt(data, key || AES_KEY);
        return res.toString();
    }
}

export default CryptoUtil