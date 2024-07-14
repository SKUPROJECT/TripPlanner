<template>
  <div class="container"> <!-- 시작은 로그인 페이지 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
}
</style>