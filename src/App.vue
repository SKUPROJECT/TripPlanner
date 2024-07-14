<template>
<div class="wrapper">
  <SignUp1/>

<nav>
  <RouterLink to="/"> SignUp1 </RouterLink>
  <RouterLink to="/SignUp2"> SignUp2 </RouterLink>

</nav>

</div>
<RouterView/>
</template>

<script>
import SignUp1 from './components/SignUp1.vue'

export default {
  name: 'App',
  components: {
    SignUp1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
