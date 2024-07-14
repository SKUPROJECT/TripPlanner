<!-- src/components/MyPage.vue -->
<template>
    <div class="myPage-box">
      <HeaderComponent :headerTitle="pageTitle"></HeaderComponent>
      <div class="body-box"></div>
      <FooterComponent></FooterComponent>
    </div>
</template>
  
<script>
  import HeaderComponent from '@/components/common/HeaderComponent.vue';
  import FooterComponent from '@/components/common/FooterComponent.vue';

  export default {
    name: 'MyPage',
    components: {
        HeaderComponent, FooterComponent
    },
    data() {
      return {
        pageTitle: '마이페이지'
      };
    },
  };
</script>
  
<style scoped>
  .myPage-box{
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    height:800px; /* Footer 고정이 꼬이지 않기 위해 body-box와 맞춰야 한다. */
  }

  .body-box{
    height: 720px;
  }
</style>
  