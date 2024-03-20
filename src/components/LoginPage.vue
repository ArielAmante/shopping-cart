<template>
    <div class="login-page">
      <h1>Login</h1>
      <form @submit.prevent="login" class="login-form">
        <div class="input-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <div class="password-input">
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required>
            <i class="eye-icon" :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'" @click="togglePasswordVisibility"></i>
          </div>
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <div v-if="errorMessage" class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
        showPassword: false
      };
    },
    methods: {
      login() {
        // Check if username and password are correct
        if (this.username === 'admin' && this.password === 'pass') {
          // Emit authenticated event
          this.$emit('authenticated');
          // Redirect to original front page
          this.$router.push('/');
        } else {
          // Display error message for invalid login
          this.errorMessage = 'Invalid username or password';
        }
      },
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #3b5998; /* Facebook blue */
    color: #fff; /* White text */
    padding: 20px;
  }
  
  .login-form {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .password-input {
    position: relative;
  }
  
  .eye-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  
  .login-button {
    padding: 10px;
    background-color: #76e966; /* Facebook dark blue */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  .login-button:hover {
    background-color: #3ddd0d; /* Darker shade of Facebook dark blue */
  }
  
  .alert {
    margin-top: 10px;
  }
  
  .error-message {
    margin-top: 10px;
  }
  </style>
  