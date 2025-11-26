<template>
  <Navbar/>
  <form class="form" @submit.prevent="onSubmit">
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <label for="email"><b>Email</b></label>
      <input id="email" v-model="form.email" type="email" placeholder="example@mail.com" required />
      <label for="psw"><b>Password</b></label>
      <input id="psw" v-model="form.password" type="password" placeholder="Enter your desired password" required />
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input id="psw-repeat" v-model="form.repeat" type="password" placeholder="Repeat Password" required />
      <p v-if="error" class="error" role="alert">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>
      <p>Already have an account? <router-link to="/login" class="link">Login here!</router-link>.</p>
      <div class="clearfix">
        <button type="submit" class="signupbtn" :disabled="loading">{{ loading ? 'Signing...' : 'Sign Up' }}</button>
        <button type="button" class="cancelbtn" @click="onCancel" :disabled="loading">Cancel</button>
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
  },
  data()
  {
    return {
      form:
      {
        email: '',
        password: '',
        repeat: ''
      },
      loading: false,
      error: null,
      success: null
    };
  },
  methods:
  {
    onCancel() {
      this.form.email = '';
      this.form.password = '';
      this.form.repeat = '';
      this.error = null;
      this.success = null;
    },
    async onSubmit() {
      this.error = null;
      this.success = null;
      if(!this.form.email || !this.form.password)
      {
        this.error = 'Email and password are required.';
        return;
      }
      if(this.form.password !== this.form.repeat)
      {
        this.error = 'Passwords do not match.';
        return;
      }
      this.loading = true;
      try
      {
        const res = await fetch('/api/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ email: this.form.email, password: this.form.password })
        });
        if(!res.ok)
        {
          const body = await res.json().catch(()=>({message: res.statusText}));
          throw new Error(body.message || 'Signup failed');
        }
        this.success = 'Account created. Redirecting to login...';
        setTimeout(()=> this.$router.push('/login'), 900);
      }
      catch(err)
      {
        this.error = err.message || 'Unexpected error';
      }
      finally
      {
        this.loading = false;
      }
    }
  }
}

</script>