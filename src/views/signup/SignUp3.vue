<template>
  <div class="signup3_wrap">
    <SignUpHeaderComponent></SignUpHeaderComponent>
      <div class="title yang-normal">000님, 가입을 축하드립니다!</div>
      <div class="btn_next bgcolor_wblue color_white yang-normal" @click="this.$router.push('/')">
          <span class="btn_txt">로그인 페이지로 이동하기</span>
      </div>
  </div>
</template>    
<script>
    import SignUpHeaderComponent from '@/components/common/SignUpHeaderComponent.vue';

    export default {
      name:'SignUp3',
      components: {
        SignUpHeaderComponent
      }
    }
</script>
<style scoped>
  .signup3_wrap {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width:360px;
    height:640px;
  }

  .signup3_wrap .title{
    margin-top:0.5rem;
    display: flex;
    justify-content: center; 
  }

  .signup3_wrap .btn_next{
		text-align: center;
    margin:0.5rem auto;
		width: 320px;
		height: 30px;
		border-radius: 5px;
		cursor:pointer;
	}

  .signup3_wrap .btn_next .btn_txt{
		margin-top:0.25rem;
		display: inline-block;
	}
</style>
