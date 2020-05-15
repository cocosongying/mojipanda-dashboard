<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img :src="userInfo.avatar" class="img-circle" />
        </div>
        <div class="pull-left info">
          <p>{{ userInfo.nickname }}</p>
        </div>
      </div>

      <!-- search form (Optional) -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search..." />
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->

      <ul class="sidebar-menu tree" data-widget="tree">
        <li class="header">HEADER</li>
        <!-- Optionally, you can add icons to the links -->
        <li :class="row.child==undefined?'':'treeview'" v-for="row in rows" :key="row.id">
          <a :href="row.url">
            <i :class="row.class"></i>
            <span>{{ row.name }}</span>
            <span class="pull-right-container" v-if="row.child!==undefined">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" v-for="child in row.child" :key="child.id">
            <li>
              <a :href="child.url">
                <i :class="child.class"></i>
                <span>{{ child.name }}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  data() {
    let Menu = this.Global.Menu.ALL;
    let userInfo = this.$store.getters.userInfo;
    let userMenu = userInfo.menu;
    userMenu = JSON.parse(userMenu);
    let rows = [];
    for (let i = 0; i < userMenu.length; i++) {
      if (userMenu[i].length > 1 && userMenu[i].indexOf("1") != -1) {
        let curr = {
          id: Menu[i].id,
          name: Menu[i].name,
          url: Menu[i].url,
          class: Menu[i].class,
          child: []
        };
        for (let j = 0; j < userMenu[i].length; j++) {
          if (userMenu[i].charAt(j) == "1") {
            curr.child.push(Menu[i].child[j]);
          }
        }
        rows.push(curr);
      } else if (userMenu[i] == "1") {
        rows.push(Menu[i]);
      }
    }
    return {
      userInfo,
      rows
    };
  }
};
</script>