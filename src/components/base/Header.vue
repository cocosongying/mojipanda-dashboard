<template>
  <!-- Main Header -->
  <header class="main-header">
    <!-- Logo -->
    <Logo />
    <!-- Header Navbar -->
    <HeaderNavbar />
  </header>
</template>

<script>
import Logo from "@/components/base/header/Logo.vue";
import HeaderNavbar from "@/components/base/header/HeaderNavbar.vue";
export default {
  components: {
    Logo,
    HeaderNavbar
  }
};
</script>
