<template>
  <div class="container-box">
    <div class="back_wrap">
      <router-link :to="{path:'/'}">
        <img src="@/assets/img/back.png" alt="back" class="back" />
      </router-link>
    </div>
    <img src="@/assets/img/airplane-icon.png" alt="Logo" class="logo" />
      <div class="find-form">
        <div class="tabs yang-normal">
          <router-link
            :to="{ path: '/loginSearch', query: { tab: 'findId' } }"
            :class="{ active: activeTab === 'findId' }" class="bgcolor_mwpink color_black"
          >
            아이디 찾기
          </router-link>
          <router-link
            :to="{ path: '/loginSearch', query: { tab: 'findPassword' } }"
            :class="{ active: activeTab === 'findPassword' }" class="bgcolor_mwpink color_black"
          >
            비밀번호 찾기
          </router-link>
        </div>
        <div v-if="activeTab === 'findId'" class="form">
          <div class="form-group">
            <label for="name" class="color_black yang-title">Name</label>
            <input type="text" id="name" v-model="name" class="yang-normal color_wgray" placeholder="Value"/>
          </div>
          <div class="form-group">
            <label for="phone" class="color_black yang-title">Phone</label>
            <input type="text" id="phone" v-model="phone" class="yang-normal color_wgray" placeholder="Value"/>
          </div>
          <button @click="findId" class="btn yang-title color_white bgcolor_mwblue">아이디 찾기</button>
        </div>
        <div v-if="activeTab === 'findPassword'" class="form">
          <div class="form-group">
            <label for="email" class="color_black yang-title">Email</label>
            <input type="text" id="email" v-model="email" class="yang-normal color_wgray" placeholder="Value"/>
          </div>
          <div class="form-group">
            <label for="name" class="color_black yang-title">Name</label>
            <input type="text" id="name" v-model="name" class="yang-normal color_wgray" placeholder="Value"/>
          </div>
          <div class="form-group">
            <label for="phone" class="color_black yang-title">Phone</label>
            <input type="text" id="phone" v-model="phone" class="yang-normal color_wgray" placeholder="Value"/>
          </div>
          <button @click="findId" class="btn yang-title color_white bgcolor_mwblue">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
    name: 'LoginSearch',
    data() {
      return {
        activeTab: 'findId',
        email:'',
        name: '',
        phone: '',
      };
    },
    watch: {
      '$route.query.tab': {
        immediate: true,
        handler(newTab) {
          if (newTab) {
            this.activeTab = newTab;
          }
        },
      },
    },
    methods: {
      findId() {
        // Implement your ID finding logic here
        console.log('Finding ID with', this.name, this.phone);
      },
      findPw() {
        // Implement your ID finding logic here
        console.log('Finding Pw with', this.name, this.phone);
      },
    },
    mounted() {
      // Set activeTab based on initial query parameter
      if (this.$route.query.tab) {
        this.activeTab = this.$route.query.tab;
      }
    },
  };
  </script>
  
<style scoped>
  .container-box{
    padding: 0 2rem 2rem 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .back_wrap{
    height:2rem;
    text-align: left;
  }

  .back_wrap .back{
    width: 20px;
    height: 20px;
    margin-top:0.75rem;
  }

  .logo {
    width: 102px;
    height: 102px;
    margin-bottom: 1rem;
  }

  .find-form {
    width: 300px;
    margin: 0 auto;
  }
  
  .tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  
  .tabs .router-link-active {
    flex: 1;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .tabs .router-link-active.active {
    color:#6A5ACD; /* purple */
    border-bottom: 2px solid #6A5ACD; 
  }
  
  .form-group {
    margin-bottom: 1rem;
    text-align: left;
  }
  
  .form-group input {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #d9d9d9; /* wgray */
    border-radius: 4px;
  }

  .btn {
    width: 100%;
    padding: 0.6rem;
    margin-bottom: 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top:1rem;
  }
</style>
  