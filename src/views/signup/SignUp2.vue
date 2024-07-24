<template>
<div class="main">
<header>
    <span class="title_head">회원가입</span>
</header>

<nav>

</nav>

<div class="input_inform">
    <input type="email" id="email"  class="yang-normal color_wgray" v-model="email" placeholder="이메일 주소" required>
    <button type="submit" innerText="본인 인증" @click="this.$router.push('/NameVerification')"></button>
    <input type="email" id="nickname"  class="yang-normal color_wgray" v-model="name" placeholder="닉네임" required>
    <button type="submit" innerText="중복 확인" @click="this.$router.push('/DoubleCheck')"></button>
    <input type="password" id="password"  class="yang-normal color_wgray" v-model="password" placeholder="비밀번호" required>
    <input type="password" id="passwordConfirm"  class="yang-normal color_wgray" v-model="passwordConfirm" placeholder="비밀번호 확인" required>
    <p v-if="passwordsMatch">비밀번호가 일치합니다.</p>
    <p v-else>비밀번호가 일치하지 않습니다.</p>
    <select id="fm"  class="yang-normal color_wgray">
    <option value="female">여자</option>
    <option value="male">남자</option>
    </select>


</div>

<main>
</main>
</div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            name: '',
            password: '',
            passwordConfirm: '',
        };
    },
    
   watch: {
    // password(newValue) {
    //      if (newValue !== this.passwordConfirm) {
    //         return this.passwordConfirm ;
    //     }
    // },
    // passwordConfirm(newValue) {
    //     if (newValue !== this.password) {
    //         return this.password; 
    //     }
    // },

    checkPasswordMatch(){
        if(this.password===this.passwordConfirm){this.passwordsMatch=true;}
    },
    passwordConfirm() {
            this.checkPasswordMatch();
    }
}
}
</script>

<style>
.main {
    font-family:'yang-normal';
	width: 360px;
	height:640px;
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
.input_inform{
    margin: 0 auto;
}
</style>