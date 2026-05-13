<template>
  <Navbar />
  <section class="home-page">
    <div class="hero-card">
      <div class="hero-copy">
        <h1>Welcome to Blooming Minds</h1>
        <p>Explore the community, discover new posts and grow with our platform.</p>
      </div>
      <div class="hero-actions">
        <router-link to="/login" class="hero-button">Login</router-link>
        <router-link to="/signup" class="hero-button secondary">Sign Up</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import "@/css/Home.css";
import Navbar from "@/components/Navbar.vue";
export default {
  name: 'HomeView',
  components: {
    Navbar
  }
};
</script>
