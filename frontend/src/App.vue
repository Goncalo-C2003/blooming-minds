<template>
  <div id="app">
    <main class="view-wrap">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import "@/css/Footer.css";

export default {
  name: 'App',
  components: {
    Footer
  }
};
</script>