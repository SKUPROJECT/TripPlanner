<template>
<div class="main">
<header>
    <span class="title_head">회원가입</span>
</header>

<nav>

</nav>

<div class="input_inform">
    <input type="text" id="name" class="yang-normal color_wgray" v-model="name" placeholder="이름" required>
    <input type="email" id="email"  class="yang-normal color_wgray" v-model="email" placeholder="이메일 주소" required>
    <button type="submit" innerText="본인 인증" @click="this.$router.push('/NameVerification')"></button>
    <input type="email" id="nickname"  class="yang-normal color_wgray" v-model="nickname" placeholder="닉네임" required>
    <button type="submit" innerText="중복 확인" @click="this.$router.push('/DoubleCheck')"></button>
    <input type="password" id="password"  class="yang-normal color_wgray" v-model="password" placeholder="비밀번호" required>
    <input type="password" id="passwordConfirm"  class="yang-normal color_wgray" v-model="passwordConfirm" placeholder="비밀번호 확인" required>
    <p v-if="passwordsMatch">비밀번호가 일치합니다.</p>
    <p v-else>비밀번호가 일치하지 않습니다.</p>
    <select id="fm"  class="yang-normal color_wgray">
    <option value="female">여자</option>
    <option value="male">남자</option>
    </select>
    <br/>

    <select id="mbti"  class="yang-normal color_wgray">
    <option value="INFP">INFP</option>
    <option value="INTP">INTP</option>
    <option value="INFJ">INFJ</option>
    <option value="INTJ">INTJ</option>
    <option value="ISTP">ISTP</option>
    <option value="ISTJ">ISTJ</option>
    <option value="ISFJ">INTP</option>
    <option value="ISFP">INTP</option>
    <option value="ENFP">ENFP</option>
    <option value="ENTP">ENTP</option>
    <option value="ENFJ">ENFJ</option>
    <option value="ENTJ">ENTJ</option>
    <option value="ESTP">ESTP</option>
    <option value="ESTJ">ESTJ</option>
    <option value="ESFJ">ENTP</option>
    <option value="ESFP">ENTP</option>
    </select>
    <br/>
    <input type="text" id="info" class="yang-normal color_wgray" placeholder="나만의 한줄소개">
    <br/>
    <select id="interest"  class="yang-normal color_wgray">
        <option value="액티비티">액티비티</option>
        <option value="음식">음식</option>
        <option value="쇼핑">쇼핑</option>
        <option value="문화">문화</option>
        <option value="축제">축제</option>
        <option value="휴양">휴양</option>
    </select>

    <div class="container">
        <button class="btn_next" @click="this.$router.push('/signUp3')"> 다음 </button>
    </div>
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
            nickname: ''
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
.container{
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.btn_next{
    width: 70%;
    height: 30px;
}
</style>