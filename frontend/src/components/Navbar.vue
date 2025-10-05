<template>
 <nav class="navbar-top">
    <nav class="navbar-topleft">
      <span class="logo">Blooming Minds Forum</span>
    </nav>
    <nav class="navbar-topright">
    </nav>
  </nav>
  <nav class="navbar-bottom">
    <nav class="navbar-bottomleft">
      <router-link to="/home" class="navbar-item" href="#">Home</router-link>
    </nav>
    <nav class="navbar-bottomright">
      <router-link to="/login" class="navbar-item" href="#">Login</router-link>
      <router-link to="/signup" class="navbar-item" href="#">Sign Up</router-link>
    </nav>
  </nav>
</template>

<script>
export default
{
  name: 'Navbar',
}
</script>