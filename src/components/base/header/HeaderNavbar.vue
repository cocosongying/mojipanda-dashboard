<template>
  <!-- Header Navbar -->
  <nav class="navbar navbar-static-top">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>
    <!-- Navbar Right Menu -->
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        <MessagesMenu />
        <NotificationsMenu />
        <TasksMenu />
        <UserAccountMenu />
        <!-- Control Sidebar Toggle Button -->
        <li>
          <a href="#" data-toggle="control-sidebar">
            <i class="fa fa-gears"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MessagesMenu from "@/components/base/header/MessagesMenu.vue";
import NotificationsMenu from "@/components/base/header/NotificationsMenu.vue";
import TasksMenu from "@/components/base/header/TasksMenu.vue";
import UserAccountMenu from "@/components/base/header/UserAccountMenu.vue";
export default {
  components: {
    MessagesMenu,
    NotificationsMenu,
    TasksMenu,
    UserAccountMenu
  }
};
</script>
