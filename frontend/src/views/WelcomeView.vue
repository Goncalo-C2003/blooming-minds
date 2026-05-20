<template>
  <div class="welcome-wrap">
    <div class="title-container">
      <img src="/mascot-logo.png" alt="" class="welcome-mascot" draggable="false" />
      <h1 class="title">Welcome to <img src="/logo-text.png" alt="Blooming Minds" class="welcome-logo-text" draggable="false" />!</h1>
      <p class="description">
        Here we discuss everything psychology, and we also listen and give support on whatever you're going through.
      </p>
      <router-link to="/home" class="action-button">Share your thoughts</router-link>
      <p class="copyright">© 2026 Gonçalo C.</p>
    </div>
  </div>
</template>

<script>
import "@/css/Welcome.css";
export default
{
  name: 'WelcomeView',
}
</script>