<template>
  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right hidden-xs" v-cloak>{{ description }}</div>
    <!-- Default to the left -->
    <strong>
      Copyright &copy; 2020
      <router-link to="/">MojiPanda</router-link>.
    </strong> All rights reserved.
  </footer>
</template>

<script>
export default {
  data() {
    return {
      description: "Version 1.0.0"
    };
  }
};
</script>