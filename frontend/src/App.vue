<template>
  <div id="app">
    <main class="view-wrap">
      <router-view />
    </main>
    <Footer v-if="$route.name !== 'Welcome'" />
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

<style>
:root {
  --bg: #ffffff;
  --card: rgba(255, 255, 255, 0.88);
  --card-glass: rgba(255, 255, 255, 0.42);
  --card-border: rgba(255, 255, 255, 0.72);
  --text: #2e1b2b;
  --muted: #5c3f57;
  --accent: #f5578a;
  --accent-soft: rgba(245, 87, 138, 0.22);
  --card-shadow: 0 28px 100px rgba(195, 49, 108, 0.18);
  --card-radius: 1rem;
}

body.light {
  --bg: #ffffff;
  --card: rgba(255, 255, 255, 0.88);
  --card-glass: rgba(255, 255, 255, 0.42);
  --card-border: rgba(255, 255, 255, 0.72);
  --text: #2e1b2b;
  --muted: #5c3f57;
  --accent: #f5578a;
  --accent-soft: rgba(245, 87, 138, 0.22);
  --card-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
}

body.dark {
  --bg: #121212;
  --card: rgba(20, 24, 42, 0.78);
  --card-glass: rgba(20, 24, 42, 0.56);
  --card-border: rgba(255, 255, 255, 0.08);
  --text: #f3e8f2;
  --muted: #b5a8c2;
  --accent: #f5578a;
  --accent-soft: rgba(245, 87, 138, 0.28);
  --card-shadow: 0 24px 90px rgba(20, 24, 42, 0.35);
}

html,
body {
  min-height: 100%;
  margin: 0;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
}

body {
  background-attachment: fixed;
}

#app {
  min-height: 100vh;
}

.view-wrap {
  padding: 1.5rem 1rem 3rem;
  max-width: 1100px;
  margin: 0 auto;
}
</style>