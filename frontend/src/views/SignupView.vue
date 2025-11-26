<template>
  <Navbar/>
  <form class="form">
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="example@mail.com" name="email" required>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter your desired password" name="psw" required>
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    <p>Already have an account? <router-link to="/login" class="link">Login here!</router-link>.</p>
    <div class="clearfix">
      <button type="submit" class="signupbtn">Sign Up</button>
      <button type="button" class="cancelbtn">Cancel</button>
    </div>
  </div>
</form>
</template>

<script>
import "@/css/Signup.css";
import Navbar from "@/components/Navbar.vue";
export default
{
  name: 'SignupView',
  components:
  {
    Navbar
  }
}

</script>