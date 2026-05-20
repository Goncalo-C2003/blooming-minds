<template>
  <Navbar />
  <section class="form-page">
  <Form>
    <template #heading>
      <h1>Log In</h1>
    </template>

    <template #description>
      <p>Welcome back to our community!</p>
    </template>

    <template #fields>
      <label for="email"><b>Email or Username</b></label>
      <input type="text" placeholder="example@mail.com" name="email" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter your desired password" name="psw" required />
    </template>

    <template #actions>
      <button type="submit" class="actnbtn">Log In</button>
    </template>

    <template #extra>
      <p>
        Don't have an account yet?
        <router-link to="/signup" class="link">Sign up here!</router-link>.
      </p>
    </template>
  </Form>
  </section>
</template>

<script>
import "@/css/Login.css";
import Navbar from "@/components/Navbar.vue";
import Form from "@/components/Form.vue";

export default {
  name: 'LoginView',
  components: {
    Navbar,
    Form
  }
};
</script>