<template>
<div class="main">
<header>
    <span class="title_head">회원가입</span>
</header>
<div class="title">
000님, 가입을 축하드립니다!
</div>

<div class="container">
<button class="btn_next" @click="this.$router.push('/')"> 다음 </button>
</div>

</div>
</template>    

<style scoped>
.main{
	font-family:'yang-normal';
	width: 360px;
	height:640px;
}
a {
  color: #42b983;
}
header { 
	background-color:#007AFF;
	opacity: 20%;
	width:100%;
	height:41px;
	margin: 0 auto;	
}
.title_head { 
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  /* align-items: center; */
  padding-top: 10px;
  font-size:16px;
}
.title{
  display: flex;
  justify-content: center; 
}
.container{
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 (옵션) */
  height: 100vh;
}
.btn_next{
  width: 70%;
  height: 30px;
}
</style>
