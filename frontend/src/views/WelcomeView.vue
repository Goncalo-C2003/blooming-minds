<template>
  <div class="title-container">
    <h1 class="title">Welcome to Blooming Minds!</h1>
    <p class="description">
      Here we discuss everything psychology, and we also listen and give support on whatever you're going through.
    </p>
    <router-link to=/home><button class="action-button">Share your thoughts</button></router-link>
  </div>
</template>

<script>
import "@/css/Welcome.css";
export default {
  name: 'WelcomeView',
}
</script>