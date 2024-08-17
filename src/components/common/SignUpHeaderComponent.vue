<template>
    <div class="header bgcolor_white yang-title">
      <span>회원가입</span>
    </div>
</template>
  
<script>
  export default {
    name: 'SignUpHeaderComponent'
  };
</script>
  
<style scoped>
  .header{
    width:360px;
    position:sticky;  /* 최초 relative속성과 같이 동작하다가 , 스크롤시 지정 지점에서 요소를 고정시킨다. */
    top:0;
    z-index:99;
    background-color: #B3E0FF;
    border-bottom:1px solid #D9D9D9;
    
    text-align: center;
    box-sizing: border-box;
    padding-top:0.5rem;
  }

  .header .headerTitle{
    font-size: 1.25rem;
  }
</style>
  