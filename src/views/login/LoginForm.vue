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
      <button type="button" class="btn yang-title color_white bgcolor_wblue" @click="this.$router.push('/signUp');">Sign Up</button>
      <button type="button" class="google-btn yang-title color_white bgcolor_wpink" id="G_OAuth_btn">
      <img src="@/assets/img/g-logo.png" alt="Google logo" />
      Login with Google
      </button>
      <div id="my-signin2" style="display: none"></div>
      <div class="links yang-normal color_wblue">
        <span><router-link :to="{ path: '/loginSearch', query: { tab: 'findId' } }" class="router-link">아이디 찾기</router-link></span> <span>/</span> <span><router-link :to="{ path: '/loginSearch', query: { tab: 'findPassword' } }" class="router-link">비밀번호 찾기</router-link></span>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    mounted(){
      this.googleInit();
    },
    methods: {
      googleInit(){
        let google = window.google;
        google.accounts.id.initialize({
          client_id: "316275300590-5ca30g48v74pa4847gs9tgaj1jafcshu.apps.googleusercontent.com",
          callback: this.googleCallback,
        });

        google.accounts.id.renderButton(document.getElementById("G_OAuth_btn"), {
          theme: "outline",
          size: "large",
        });
      },googleCallback(res) {
        console.log("res: ", res);

        this.googleUser = this.decodeJWT(res.credential);
        console.log(this.googleUser);
      },
      base64UrlDecode(base64Url) { /* 한글 디코딩 함수 */
        const base64 = base64Url
          .replace(/-/g, '+')
          .replace(/_/g, '/');

        const decoded = atob(base64);
        return decodeURIComponent(escape(decoded));
      },
      decodeJWT(token) {
        const base64Url = token.split('.')[1];
        const jsonPayload = this.base64UrlDecode(base64Url);
        return JSON.parse(jsonPayload);
      },
      login() {
        const formData = new FormData();
        formData.append('id', this.email);
        formData.append('pw', this.password);

        axios.post('http://localhost:9999/api/v1/member/token', formData)
        .then(response => {
          alert("로그인 성공"+response);
          // response.data.accessToken
          // response.data.refreshToken
        })
        .catch(error => {
          if (error.response.status === 401) {
            alert("아이디와 비밀번호가 일치하지 않습니다.");
          } else if(error.response.status === 404){
            alert("아이디가 존재하지 않습니다.");
          } else{
            alert("로그인에 실패했습니다.");
          }
        });
      },
      signup() {
        
      }
    }
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
  