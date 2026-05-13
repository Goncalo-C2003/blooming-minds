<template>
  <Navbar />
  <Form>
    <template #heading>
      <h1>Sign Up</h1>
    </template>

    <template #description>
      <p>Please fill in this form to create an account.</p>
    </template>

    <template #fields>
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="example@mail.com" name="email" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter your desired password" name="psw" required />

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
    </template>

    <template #actions>
      <button type="submit" class="actnbtn">Sign Up</button>
    </template>

    <template #extra>
      <p>
        Already have an account?
        <router-link to="/login" class="link">Login here!</router-link>.
      </p>
    </template>
  </Form>
</template>

<script>
import "@/css/Signup.css";
import Navbar from "@/components/Navbar.vue";
import Form from "@/components/Form.vue";
export default {
  name: 'SignupView',
  components: {
    Navbar,
    Form
  }
}

</script>