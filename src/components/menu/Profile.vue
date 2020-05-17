<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content_wrapper">
    <!-- Content Header (Page header) -->
    <ContentHeader :headerInfo="headerInfo" />

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-3">
          <!-- Profile Image -->
          <div class="box box-primary">
            <div class="box-body box-profile">
              <img class="profile-user-img img-responsive img-circle" :src="userInfo.avatar" />
              <h3 class="profile-username text-center">{{ userInfo.nickname }}</h3>
              <a href="#" class="btn btn-block bg-red">
                <b>好运</b>
              </a>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

          <!-- About Me Box -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">关于我</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <strong>
                <i class="fa fa-file-text-o margin-r-5"></i> 描述
              </strong>
              <p>{{ userInfo.description }}</p>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-9">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active">
                <a href="#settings" data-toggle="tab">修改信息</a>
              </li>
              <li class>
                <a href="#password" data-toggle="tab">修改密码</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="active tab-pane" id="settings">
                <form class="form-horizontal">
                  <div class="form-group">
                    <label class="col-sm-2 control-label">登录名</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" :value="userInfo.username" disabled />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">昵称</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        v-model="nickname"
                        :disabled="disabled"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">描述</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" v-model="description" :disabled="disabled"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <a class="btn btn-danger" @click="updateInfo">提交</a>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane" id="password">
                <form class="form-horizontal">
                  <div class="form-group">
                    <label class="col-sm-2 control-label">当前密码</label>
                    <div class="col-sm-10">
                      <input
                        type="password"
                        class="form-control"
                        v-model="oldpassword"
                        placeholder="输入当前密码"
                        :disabled="disabled"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">新密码</label>
                    <div class="col-sm-10">
                      <input
                        type="password"
                        class="form-control"
                        v-model="newpassword"
                        placeholder="输入新密码"
                        :disabled="disabled"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label"></label>
                    <div class="col-sm-10">
                      <input
                        type="password"
                        class="form-control"
                        v-model="newpassword2"
                        placeholder="再输入一遍新密码"
                        :disabled="disabled"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <a class="btn btn-danger" @click="modifyPasswd">提交</a>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /.tab-pane -->
            </div>
            <!-- /.tab-content -->
          </div>
          <!-- /.nav-tabs-custom -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import ContentHeader from "@/components/base/ContentHeader.vue";
import CryptoUtil from "../../util/crypto";
import MenuApi from "../../common/menu";
import UserApi from "../../common/user";
export default {
  data() {
    let userInfo = this.$store.getters.userInfo;
    let headerInfo = MenuApi.getMenuById(this.Global.Menu.Profile);
    let nickname = userInfo.nickname;
    let description = userInfo.description;
    let disabled =
      userInfo.role == this.Global.UserAttr.Role.Guest ? true : false;
    let oldpassword = "";
    let newpassword = "";
    let newpassword2 = "";
    return {
      userInfo,
      headerInfo,
      nickname,
      description,
      oldpassword,
      newpassword,
      newpassword2,
      disabled
    };
  },
  components: {
    ContentHeader
  },
  methods: {
    async updateInfo() {
      if (this.disabled) {
        this.$toastr.e("游客不可以编辑哦");
        return;
      }
      let params = {
        token: this.$store.getters.token,
        nickname: this.nickname,
        description: this.description
      };
      let res = await UserApi.updateById(params);
      let { code } = res;
      if (code == 0) {
        let userInfo = this.$store.getters.userInfo;
        userInfo.nickname = this.nickname;
        userInfo.description = this.description;
        this.$store.dispatch("setUserInfo", userInfo);
        this.$toastr.s("更新成功");
      } else {
        this.$toastr.e("更新失败，请稍后再试");
      }
    },
    async modifyPasswd() {
      if (this.disabled) {
        this.$toastr.e("游客不可以编辑哦");
        return;
      }
      let params = {
        token: this.$store.getters.token,
        oldpassword: CryptoUtil.aesEncrypt(this.oldpassword),
        newpassword: CryptoUtil.aesEncrypt(this.newpassword),
        newpassword2: CryptoUtil.aesEncrypt(this.newpassword2)
      };
      let res = await UserApi.modifyPasswd(params);
      let { code } = res;
      if (code == 0) {
        this.$toastr.s("修改密码成功");
        if (localStorage.getItem("loginInfo")) {
          let info = JSON.parse(localStorage.getItem("loginInfo"));
          info.password = "";
          localStorage.setItem("loginInfo", JSON.stringify(info));
        }
      } else {
        this.oldpassword = "";
        this.newpassword = "";
        this.newpassword2 = "";
        this.$toastr.e("更新失败，请稍后再试");
      }
    }
  }
};
</script>
