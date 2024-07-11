<template>
  <div class="container-box">
    <img src="@/assets/img/airplane-icon.png" alt="Logo" class="logo" @click="this.$router.push('myPage');"/>
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="email" class="color_black yang-title">Email</label>
        <input type="email" id="email" class="yang-normal color_wgray" v-model="email" placeholder="Value" required />
      </div>
      <div class="input-group">
        <label for="password" class="color_black yang-title">Password</label>
        <input type="password" id="password" class="yang-normal color_wgray" v-model="password" placeholder="Value" required />
      </div>
      <button type="submit" class="btn yang-title color_white bgcolor_mwblue">Log in</button>
      <button type="button" class="btn yang-title color_white bgcolor_wblue" @click="signup">Sign Up</button>
      <button type="button" class="google-btn yang-title color_white bgcolor_wpink" @click="loginWithGoogle">
      <img src="@/assets/img/g-logo.png" alt="Google logo" />
      Login with Google
      </button>
      <div class="links yang-normal color_wblue">
        <span><router-link :to="{ path: '/loginSearch', query: { tab: 'findId' } }" class="router-link">아이디 찾기</router-link></span> <span>/</span> <span><router-link :to="{ path: '/loginSearch', query: { tab: 'findPassword' } }" class="router-link">비밀번호 찾기</router-link></span>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Handle login
        console.log('Logging in with', this.email, this.password);
      },
      signup() {
        // Handle signup
        console.log('Sign up');
      },
      loginWithGoogle() {
        // Handle Google login
        console.log('Login with Google');
      },
    },
  };
</script>
  
<style scoped>
.container-box{
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo {
  width: 102px;
  height: 102px;
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}

.btn {
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.google-btn {
  display: flex;
  align-items: center;
  gap : 16%;
  
  width: 100%;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.google-btn img {
  width: 12%;
  height: 12%;
}

.links {
  margin-top: 1rem;
  text-align: right;
  font-size: 0.75rem;
  cursor:pointer;
}

</style>
  