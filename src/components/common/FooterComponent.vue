<template>
    <div class="footer bgcolor_white">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
</template>
  
<script>
  export default {
    name: 'FooterComponent',
  };
</script>
  
<style scoped>
  .footer{
    width:360px;
    position:sticky;
    bottom:0;
    z-index:99;
    border-top:1px solid #D9D9D9;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer span{
    background-color: #d9d9d9; /* wgray */

    width: 1.75rem;          
    height: 1.75rem;          
    border-radius: 50%;  
    cursor:pointer;
    margin:0.5rem 0.25rem 0.5rem 0.25rem;
    box-sizing: border-box;
  }
</style>
  