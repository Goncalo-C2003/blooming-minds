<template>
  <Navbar />
  <section class="message-page">
    <div class="message-card">
      <h1>Messages</h1>
      <p>Keep track of your latest forum activity and announcements.</p>
      <div class="message-grid">
        <article class="message-item">
          <h2>Recent Discussion</h2>
          <p>See the latest community posts and join the current conversations.</p>
        </article>
        <article class="message-item">
          <h2>System Alerts</h2>
          <p>Stay informed about updates and newly added features.</p>
        </article>
      </div>
      <div class="message-actions">
        <router-link to="/login" class="message-button primary-button">Login</router-link>
        <router-link to="/signup" class="message-button secondary-button">Sign Up</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import "@/css/Message.css";
import Navbar from "@/components/Navbar.vue";
export default {
  name: 'MessageView',
  components: {
    Navbar
  }
};
</script>
