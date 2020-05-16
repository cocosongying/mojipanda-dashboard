<template>
  <div class="body-bg">
    <div class="login-box">
      <div class="login-logo">
        <a href="/">
          <b>磨叽</b>熊猫
        </a>
      </div>
      <div class="login-box-body">
        <p class="login-box-msg">～来开启新世界的大门吧～</p>
        <form>
          <div class="form-group has-feedback">
            <input type="text" class="form-control" placeholder="用户名" v-model="username" />
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="通行证" v-model="password" />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="rememberme" :value="true" /> 记住我
                </label>
              </div>
            </div>
            <div class="col-xs-4">
              <button type="button" class="btn btn-primary btn-block btn-flat" @click="doLogin">登录</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.body-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #d2d6de;
}
</style>

<script>
import Login from "../common/login";
import CryptoUtil from "../util/crypto";
export default {
  data() {
    return {
      username: "",
      password: "",
      rememberme: false
    };
  },
  created() {
    this.$store.dispatch("setLoginState", "");
    this.$store.dispatch("setUserInfo", {});
    if (localStorage.getItem("loginInfo")) {
      let info = JSON.parse(localStorage.getItem("loginInfo"));
      this.username = info.username;
      this.password = CryptoUtil.aesDecrypt(info.password);
      this.rememberme = info.rememberme;
    }
  },
  methods: {
    async doLogin() {
      let res = await Login.doLogin(this.username, this.password);
      let { code, data } = res;
      if (code == 0) {
        this.dealPass(data);
      } else {
        this.dealError(data);
      }
    },
    dealPass(data) {
      if (this.rememberme == true) {
        let info = {
          username: this.username,
          password: CryptoUtil.aesEncrypt(this.password),
          rememberme: true
        };
        localStorage.setItem("loginInfo", JSON.stringify(info));
      } else {
        localStorage.removeItem("loginInfo");
      }
      this.$store.dispatch("setLoginState", true);
      this.$store.dispatch("setUserInfo", data.userInfo);
      this.$store.dispatch("setToken", data.token);
      localStorage.setItem("store", JSON.stringify(this.$store.state));
      window.open("/dashboard", "_self");
    },
    dealError() {
      this.password = "";
      this.$toastr.e("用户名或密码错误");
    }
  }
};
</script>