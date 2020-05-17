<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content_wrapper">
    <!-- Content Header (Page header) -->
    <ContentHeader :headerInfo="headerInfo" />
    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <!-- 工具按钮 -->
          <div id="toolbar" class="btn-group">
            <button
              id="btn_add"
              type="button"
              class="btn btn-default"
              @click="newUser"
              data-toggle="modal"
              data-target="#modal-default"
            >
              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
            </button>
            <button id="btn_edit" type="button" class="btn btn-default">
              <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
            </button>
            <button id="btn_delete" type="button" class="btn btn-default">
              <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
            </button>
          </div>
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">用户列表</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        v-model="selectAll"
                        :value="true"
                        @click="toggleSelectList(selectAll)"
                      />
                    </th>
                    <th style="width: 10px">#</th>
                    <th>ID</th>
                    <th>登录名</th>
                    <th>昵称</th>
                    <th>角色</th>
                    <th>有效</th>
                    <th>上次登录</th>
                    <th>操作</th>
                  </tr>
                  <tr v-for="(row, index) in rows" :key="index">
                    <td>
                      <input
                        type="checkbox"
                        v-model="selectList"
                        :value="row.id"
                        @change="toggleSelect(row.id)"
                      />
                    </td>
                    <td>{{ index + 1 }}.</td>
                    <td>{{ row.id }}</td>
                    <td>
                      <a
                        @click="showInfo(row.id)"
                        data-toggle="modal"
                        data-target="#modal-default"
                      >{{ row.username }}</a>
                    </td>
                    <td>{{ row.nickname }}</td>
                    <td>{{ row.role }}</td>
                    <td>
                      <span
                        :class="row.active ? 'label label-success' : 'label label-danger'"
                      >{{ row.state }}</span>
                    </td>
                    <td>{{ row.lastLogin }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-xs btn-danger"
                        @click="resetPasswd(row.id)"
                      >重置密码</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <div class="pull-left">共 {{ total }} 条数据</div>
              <ul class="pagination pagination-sm no-margin pull-right" v-if="total > 0">
                <li>
                  <a @click="jumpPage(pageIndex - 1)">&laquo;</a>
                </li>
                <li>
                  <a @click="jumpPage(pageIndex + 1)">&raquo;</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- /.box -->
        </div>
      </div>
      <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title">用户信息</h4>
            </div>
            <div class="modal-body">
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-2 control-label">登录名</label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      v-model="current.username"
                      :disabled="current.usernameDisabled"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">昵称</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="current.nickname" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">描述</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="current.description" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">头像</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="current.avatar" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">角色</label>
                  <div class="col-sm-10">
                    <select class="form-control" v-model="current.role">
                      <option value="1">普通用户</option>
                      <option value="9">管理员</option>
                      <option value="2">游客</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">有效</label>
                  <div class="col-sm-10">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" v-model="current.active" :value="true" />
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default pull-left" data-dismiss="modal">取消</button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                @click="updateUserInfo"
              >保存</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import ContentHeader from "@/components/base/ContentHeader.vue";
import MenuApi from "../../common/menu";
import UserApi from "../../common/user";
export default {
  inject: ["reload"],
  async created() {
    let params = {
      token: this.$store.getters.token
    };
    let res = await UserApi.list(params);
    let { code, data } = res;
    if (code == 0) {
      this.dealListData(data.list);
      this.rows = data.list;
      this.total = data.total;
    } else {
      this.rows = [];
    }
  },
  data() {
    let headerInfo = MenuApi.getMenuById(this.Global.Menu.UserList);
    let rows = [];
    let total = 0;
    let pageIndex = 0;
    let current = {};
    let selectList = [];
    return {
      headerInfo,
      rows,
      total,
      pageIndex,
      selectId: 0,
      current,
      selectList,
      selectAll: false
    };
  },
  components: {
    ContentHeader
  },
  methods: {
    showInfo(id) {
      this.selectId = id;
      this.getById(id);
    },
    dealListData(list) {
      list.forEach(row => {
        row.state = row.active == true ? "有效" : "无效";
      });
    },
    newUser() {
      this.current = {
        role: 1,
        usernameDisabled: false,
        active: true
      };
    },
    async updateUserInfo() {
      let current = this.current;
      let params = {
        token: this.$store.getters.token,
        nickname: current.nickname,
        description: current.description,
        role: current.role,
        active: current.active
      };
      if (current.id) {
        params.id = current.id;
        let res = await UserApi.updateById(params);
        let { code } = res;
        if (code == 0) {
          this.$toastr.s("修改成功");
          this.reload();
        } else {
          this.$toastr.e("修改失败");
        }
      } else {
        params.username = current.username;
        let res = await UserApi.add(params);
        let { code } = res;
        if (code == 0) {
          this.$toastr.s("新增成功");
        } else {
          this.$toastr.e("新增失败");
        }
      }
    },
    async resetPasswd(id) {
      let params = {
        token: this.$store.getters.token,
        id: id
      };
      await UserApi.resetPasswd(params);
      this.$toastr.s("重置成功");
    },
    async getById(id) {
      let params = {
        token: this.$store.getters.token,
        id: id
      };
      let res = await UserApi.getById(params);
      let { code, data } = res;
      if (code == 0) {
        this.current = data.userInfo;
        this.current.usernameDisabled = true;
        // this.dealPass(data);
      } else {
        this.current = {};
        // this.dealError(data);
      }
    },
    toggleSelect() {
      this.selectAll = this.selectList.length == this.rows.length;
    },
    toggleSelectList(data) {
      this.selectAll = !data;
      if (this.selectAll) {
        let list = this.rows.map(value => {
          return value.id;
        });
        this.selectList = list;
      } else {
        this.selectList = [];
      }
    },
    jumpPage(page) {
      if (page < 0) {
        page = 0;
      } else if (page > this.total - 1) {
        page = this.total - 1;
      }
      this.pageIndex = page;
    }
  },
  mounted() {}
};
</script>