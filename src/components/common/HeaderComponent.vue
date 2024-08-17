<template>
    <div class="header bgcolor_white yang-title">
      <span class="headerTitle">{{headerTitle}}</span>
      <button class="header_hamburger" @click="this.$router.push('placeNear')">&#9776;</button>
    </div>
</template>
  
<script>
  export default {
    name: 'HeaderComponent',
    props: {
      headerTitle: {
        type: String,
        required: true
      }
    },
  };
</script>
  
<style scoped>
  .header{
    width:360px;
    position:sticky;  /* 최초 relative속성과 같이 동작하다가 , 스크롤시 지정 지점에서 요소를 고정시킨다. */
    top:0;
    z-index:99;
    border-bottom:1px solid #D9D9D9;

    display: flex;
    align-items: center;
    justify-content: space-between; /* 2개의 요소를 양 끝에 배치*/
  }

  .header_hamburger{
    border:none;
    background-color:transparent; /*투명하게 조절*/
    font-size:1.3rem;
    cursor:pointer;
  }

  .header .headerTitle{
    padding:0.5rem 0.5rem 0 0.5rem;
  }
</style>
  