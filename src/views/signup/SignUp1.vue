<template>
  <main>

    <header>
      <span class="title_head">회원가입</span>
	</header>

    <nav>약관에 동의해 주세요</nav>
    
		<article>
			<p class="agree_article">
				<span class="agree_check"></span>
				<span class="agree_title">개인정보보호를 위한 이용자 동의</span>
				<span class="agree_detail">자세히 보기</span>
			</p>
			<div class="agree_content"> </div>
		
			<p class="agree_article">
				<span class="agree_check"></span>
				<span class="agree_title">서비스 이용약관 동의</span>
				<span class="agree_detail">자세히 보기</span>
			</p>
			<div class="agree_content"> </div>
		
			<p class="agree_article">
				<span class="agree_check"></span>
				<span class="agree_title">만 14세 이상입니다</span>
			</p>
		</article>


    <div class="btn_next" @click="this.$router.push('/signUp2')"> 다음 </div>
  </main>

</template>

<script>
// export default {
//   name: 'SignUp1',
//   props: {
//     msg: String
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main{
	font-family:'yang-normal';
	width: 360px;
	height:640px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* 기본 설정 : 태양 */


header { 
	background-color:#007AFF;
	opacity: 20%;
	width:100%;
	height:41px;
	margin: 0 auto;	
	display: flex;
	justify-content: center;
	align-items: center; 
}
.title_head { 
	color: black;	
	font-size:16px;
}
nav { 
	color: black;
	text-align:center;
	font-size:14px;
	margin-top: 5px;
}

.agree_article{
	margin-top: 10px;
}
.agree_check { 
	background-color: #B8B8B8;
	border-radius: 10px;
	border: 1px solid black;
	float: left;
	width:18px;
	height:18px;
	margin-left: 20px;
}

.agree_title {
	font-size:14px;
	margin-top: 0;
	display: inline-block;
	
}
.agree_detail { 
	float : right;
	font-size:10px;
	padding-top: 5px;
}

.agree_content { 
	background-color: #B8B8B8;
	margin: 0 auto;
	width:320px;
	height:71px;
	border-radius: 5px;
}
.btn_next{
	text-align: center;
	margin: 0 auto;
	margin-top: 250px;
	padding-top: 5px;
	width: 90%;
	height: 30px;
	border-radius: 5px;
	background-color: grey;
	color: 1px solid black; 
}

</style>