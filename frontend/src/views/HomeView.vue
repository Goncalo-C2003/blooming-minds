<template>
  <Navbar/>
  <div class="main-content">
    <h1>Welcome to the Home Page</h1>
    <p>This is the main landing page of the application.</p>
  </div>
</template>

<script>
import "@/css/Home.css";
import Navbar from "@/components/Navbar.vue";
export default
{
  name: 'HomeView',
  components:
  {
    Navbar
  }
}
</script>