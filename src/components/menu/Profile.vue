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
              <img
                class="profile-user-img img-responsive img-circle"
                src="https://mojipanda.com/img/author.jpg"
              />

              <h3 class="profile-username text-center">{{ userInfo.name }}</h3>

              <p class="text-muted text-center">Software Engineer</p>

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
                <i class="fa fa-pencil margin-r-5"></i> 技能
              </strong>

              <p>
                <button class="label bg-navy">Coding</button>
                <button class="label label-info">Javascript</button>
                <button class="label label-warning">PHP</button>
                <button class="label label-primary">Node.js</button>
              </p>
              <hr />

              <strong>
                <i class="fa fa-file-text-o margin-r-5"></i> 备注
              </strong>

              <p>备注信息</p>
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
                <a href="#settings" data-toggle="tab">设置</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="active tab-pane" id="settings">
                <form class="form-horizontal">
                  <div class="form-group">
                    <label for="inputName" class="col-sm-2 control-label">登录名</label>

                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control"
                        id="inputName"
                        placeholder="Name"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputName" class="col-sm-2 control-label">昵称</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputName" placeholder="Name" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputSkills" class="col-sm-2 control-label">技能</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputSkills" placeholder="Skills" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputExperience" class="col-sm-2 control-label">备注</label>

                    <div class="col-sm-10">
                      <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-danger">提交</button>
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
export default {
  data() {
    let userInfo = this.$store.getters.userInfo;
    let headerInfo = {
      title: "基本信息",
      subtitle: "",
      level: ["基本信息"],
      url: [""]
    };
    return {
      userInfo,
      headerInfo
    };
  },
  components: {
    ContentHeader
  }
};
</script>
