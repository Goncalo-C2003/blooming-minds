<template>
  <Navbar/>
  <form class="form">
  <div class="container">
    <h1>Login</h1>
    <p>Welcome back to our community!</p>
    <hr>
    <label for="email"><b>Email or Username</b></label>
    <input type="text" placeholder="example@mail.com" name="email" required>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter your desired password" name="psw" required>
    <p>Don't have an account yet? <router-link to="/login" class="link">Sign up here!</router-link>.</p>
    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
</template>

<script>
import "@/css/Login.css";
import Navbar from "@/components/Navbar.vue";
export default
{
  name: 'LoginView',
  components:
  {
    Navbar
  }
}
</script>