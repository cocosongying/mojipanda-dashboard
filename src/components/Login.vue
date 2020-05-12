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
            <input type="text" class="form-control" placeholder="用户名" />
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="通行证" />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox">
                <label>
                  <input type="checkbox" /> 记住我
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
export default {
  methods: {
    doLogin() {
      this.$store.dispatch("setLoginState", true);
      this.$router.push({ path: "/" });
    }
  }
};
</script>