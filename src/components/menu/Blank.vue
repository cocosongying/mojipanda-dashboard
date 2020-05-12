<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content_wrapper">
    <!-- Content Header (Page header) -->
    <ContentHeader :headerInfo="headerInfo" />
    <!-- Main content -->
    <section class="content container-fluid">
      <!--------------------------
        | Your Page Content Here |
      -------------------------->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import ContentHeader from "@/components/base/ContentHeader.vue";
export default {
  data() {
    let headerInfo = {
      title: "Page Header",
      subtitle: "Optional description",
      level: [],
      url: []
    };
    return {
      headerInfo
    };
  },
  components: {
    ContentHeader
  }
};
</script>