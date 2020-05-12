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
          <p>{{ userInfo.name }}</p>
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
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">HEADER</li>
        <!-- Optionally, you can add icons to the links -->
        <li v-for="row in rows" :key="row.id">
          <a :href="row.url">
            <i :class="row.class"></i>
            <span>{{ row.name }}</span>
          </a>
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
    let userInfo = this.$store.getters.userInfo;
    return {
      userInfo,
      rows: [{
        id: 1,
        name: "Home",
        class: 'fa fa-home'
      },{
        id: 2,
        name: "Emoji",
        class: 'fa fa-smile-o'
      }]
    };
  },
};
</script>