
<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <div class="signup1_wrap">
    <SignUpHeaderComponent></SignUpHeaderComponent>
    <nav class="yang-normal">약관에 동의해 주세요</nav>
		<article class="yang-normal">
			<p class="agree_article">
				<span @click="toggleCheck" ><i :class="iconClass"></i></span>				
				<span class="agree_title">개인정보보호를 위한 이용자 동의</span>
				<span class="agree_detail">자세히 보기</span>
			</p>
			<div class="agree_content bgcolor_gray"> </div>
		
			<p class="agree_article">
				<span @click="toggleCheck" ><i :class="iconClass"></i></span>				
				<span class="agree_title">서비스 이용약관 동의</span>
				<span class="agree_detail">자세히 보기</span>
			</p>
			<div class="agree_content bgcolor_gray"> </div>
		
			<p class="agree_article">
				<span @click="toggleCheck" ><i :class="iconClass"></i></span>				
				<span class="agree_title">만 14세 이상입니다</span>
			</p>
		</article>

    <div class="btn_next bgcolor_wblue color_white yang-normal" @click="this.$router.push('signUp2')">
		<span class="btn_txt">다음</span>
	</div>
  </div>
</template>

<script>
	import SignUpHeaderComponent from '@/components/common/SignUpHeaderComponent.vue';

	export default {
		name: 'SignUp1',
		components: {
			SignUpHeaderComponent
		},

	data() {
			return {
			isChecked: false,
			};
	},
	computed: {
		iconClass() {
			return this.isChecked ? 'fas fa-check' : 'far fa-circle';
		},
	},
	methods: {
		toggleCheck(){
			this.isChecked = !this.isChecked;
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.signup1_wrap{
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		height:640px;
	}

	.signup1_wrap nav { 
		text-align:center;
		font-size:14px;
		margin-top: 0.5rem;
	}

	.signup1_wrap article{
		padding:0.5rem;
	}

	.signup1_wrap article .agree_article{
		margin-top: 10px;
	}
	
	.signup1_wrap article .agree_article span{
		cursor:pointer;
	}

	.signup1_wrap article .agree_title {
		font-size:14px;
		margin-left:0.5rem;
		display: inline-block;
		
	}

	.signup1_wrap article .agree_detail { 
		float : right;
		font-size:10px;
		padding-top: 5px;
	}

	.signup1_wrap article .agree_content { 
		margin: 0 auto;
		width:320px;
		height:100px;
		border-radius: 5px;
	}

	.signup1_wrap .btn_next{
		position: relative;
		bottom:-200px;
		text-align: center;
		margin: 0 auto;
		width: 320px;
		height: 30px;
		border-radius: 5px;
		cursor:pointer;
	
	}

	.signup1_wrap .btn_next .btn_txt{
		margin-top:0.25rem;
		display: inline-block;
	}
</style>