<template>
  <nav class="navbar-top">
    <div class="navbar-topleft">
      <div class="logo-wrap">
        <img src="/mascot-logo.png" alt="" class="logo-mascot" />
        <img src="/logo-text.png" alt="Blooming Minds" class="logo-text" />
      </div>
    </div>
    <div class="navbar-topright">
      <button type="button" class="theme-button" @click="toggleTheme">
        {{ themeLabel }}
      </button>
    </div>
  </nav>
  <nav class="navbar-bottom">
    <div class="navbar-bottomleft">
      <router-link to="/home" class="navbar-item">Home</router-link>
      <router-link to="/message" class="navbar-item">Messages</router-link>
    </div>
    <div class="navbar-bottomright">
      <router-link to="/login" class="navbar-item">Log In</router-link>
      <router-link to="/signup" class="navbar-item">Sign Up</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      dark: document.body.classList.contains('dark')
    };
  },
  computed: {
    themeLabel() {
      return this.dark ? '☀' : '🌙︎';
    }
  },
  mounted() {
    if (!document.body.classList.contains('dark')) {
      document.body.classList.add('light');
    }
  },
  methods: {
    toggleTheme() {
      this.dark = !this.dark;
      document.body.classList.toggle('dark', this.dark);
      document.body.classList.toggle('light', !this.dark);
    }
  }
};
</script>
