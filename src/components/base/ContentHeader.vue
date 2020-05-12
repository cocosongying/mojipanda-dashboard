<template>
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      {{ headerInfo.title }}
      <small>{{ headerInfo.subtitle }}</small>
    </h1>
    <ol class="breadcrumb" v-if="headerInfo.level.length > 0">
      <li>
        <a href="javascript:void(0);" @click="toUrl('/')">
          <i class="fa fa-dashboard"></i> 首页
        </a>
      </li>
      <li v-for="i in headerInfo.level.length - 1" :key="i">
        <a
          href="javascript:void(0);"
          @click="toUrl(headerInfo.url[i - 1])"
        >{{ headerInfo.level[i - 1] }}</a>
      </li>
      <li class="active">{{ headerInfo.level[headerInfo.level.length - 1] }}</li>
    </ol>
  </section>
</template>

<script>
export default {
  props: ["headerInfo"],
  methods: {
    toUrl(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>
