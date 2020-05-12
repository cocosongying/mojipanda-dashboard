<template>
  <div class="wrapper">
    <Header />
    <MainSidebar />
    <ContentWrapper />
    <Footer />
    <ControlSidebar />
  </div>
</template>

<script>
import Header from "@/components/base/Header.vue";
import MainSidebar from "@/components/base/MainSidebar.vue";
import ContentWrapper from "@/components/base/ContentWrapper.vue";
import Footer from "@/components/base/Footer.vue";
import ControlSidebar from "@/components/base/ControlSidebar.vue";

export default {
  components: {
    Header,
    MainSidebar,
    ContentWrapper,
    Footer,
    ControlSidebar
  }
};
</script>