<template>
 <nav class="navbar-top">
    <div class="navbar-topleft">
      <span class="logo">Blooming Minds Forum</span>
    </div>
    <div class="navbar-topright">
    </div>
  </nav>
  <nav class="navbar-bottom">
    <div class="navbar-bottomleft">
      <a style="text-decoration: none; color: var(--text);
      font-size: 14px; font-weight: bold; transition:
      color 0.2s ease;" href="#">Home</a>
    </div>
    <div class="navbar-bottomright">
      <a style="text-decoration: none; color: var(--text);
      font-size: 14px; font-weight: bold; transition:
      color 0.2s ease;" href="#">Login</a>
      <router-link to="/signup" style="text-decoration: none; color: var(--text);
      font-size: 14px; font-weight: bold; transition:
      color 0.2s ease;" href="#">Sign Up</router-link>
    </div>
  </nav>
</template>

<script>
export default
{
  name: 'Navbar',
}
</script>