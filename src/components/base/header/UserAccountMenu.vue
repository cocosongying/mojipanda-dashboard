<template>
  <!-- User Account Menu -->
  <li class="dropdown user user-menu">
    <!-- Menu Toggle Button -->
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
      <!-- The user image in the navbar-->
      <img src="https://mojipanda.com/img/author.jpg" class="user-image" alt="User Image" />
      <!-- hidden-xs hides the username on small devices so only the image appears. -->
      <span class="hidden-xs" v-cloak>{{ userInfo.name }}</span>
    </a>
    <ul class="dropdown-menu">
      <!-- The user image in the menu -->
      <li class="user-header">
        <img src="https://mojipanda.com/img/author.jpg" class="img-circle" alt="User Image" />
        <p>
          {{ userInfo.description }}
          <small>{{ userInfo.subDescription }}</small>
        </p>
      </li>
      <!-- Menu Footer-->
      <li class="user-footer">
        <div class="pull-left">
          <a href="javascript:void(0);" class="btn btn-default btn-flat" @click="toProfile">简介</a>
        </div>
        <div class="pull-right">
          <a href="javascript:void(0);" class="btn btn-default btn-flat" @click="doLogout">退出</a>
        </div>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    let userInfo = this.$store.getters.userInfo;
    return { userInfo };
  },
  methods: {
    toProfile() {
      this.$router.push({ path: "/profile" });
    },
    doLogout() {
      this.$store.dispatch("setLoginState", "");
      this.$store.dispatch("setUserInfo", {});
      this.$router.push({ path: "/login" });
    }
  }
};
</script>