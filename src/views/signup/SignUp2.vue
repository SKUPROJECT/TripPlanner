<template>
    <div class="signup2_wrap">
    <SignUpHeaderComponent></SignUpHeaderComponent>
    <div class="input_inform yang-normal">
        <div class="input_wrap">
            <input type="text" id="email"  class="yang-normal color_wgray" v-model="email" placeholder="이메일 주소" required>
            <div class="auth_btn bgcolor_gray color_white">이메일 인증</div>
        </div>
        
        <div class="input_wrap">
            <input type="text" id="phone"  class="yang-normal color_wgray" v-model="phone" placeholder="휴대폰 번호" required>
            <div class="auth_btn bgcolor_gray color_white">휴대폰 인증</div>
        </div>

        <div class="input_wrap">
            <input type="email" id="nickname"  class="yang-normal color_wgray" v-model="nickname" placeholder="닉네임" required>
            <div class="auth_btn bgcolor_gray color_white">중복확인</div>
        </div>

        <div class="input_wrap">
            <input type="text" id="datepicker" ref="datepicker" class="yang-normal color_wgray" v-model="birth" placeholder="생년월일">
        </div>

        <div class="input_wrap">
            <input type="password" id="password"  class="yang-normal color_wgray" v-model="password" placeholder="비밀번호" required>
        </div>

        <div class="input_wrap">
            <input type="password" id="passwordConfirm"  class="yang-normal color_wgray" v-model="passwordConfirm" placeholder="비밀번호 확인" required>
        </div>
        <!-- <p v-if="passwordsMatch">비밀번호가 일치합니다.</p>
        <p v-else>비밀번호가 일치하지 않습니다.</p> -->
        
        <div class="choice_wrap">
            <span class="choice-title color_wgray">성별</span><span class="gender-choice color_wgray"><span class="gender color_wgray">여성</span><span class="gender color_wgray">남성</span></span>
        </div>

        <div class="choice_wrap">
            <span class="choice-title color_wgray">MBTI</span>
            <select id="mbti" class="color_wgray yang-title">
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
        </div>

        <div>관심사를 선택해 주세요</div>
        <div class="int_wrap">
            <span class="color_wgray">+ 문화</span>
            <span class="color_wgray">+ 액티비티</span>
            <span class="color_wgray">+ 음식</span>
            <span class="color_wgray">+ 쇼핑</span>
            <span class="color_wgray">+ 축제</span>
            <span class="color_wgray">+ 휴양</span>
        </div>

        <div class="btn_next bgcolor_wblue color_white yang-normal" @click="this.$router.push('signUp3')">
            <span class="btn_txt">다음</span>
        </div>
    </div>
</div>
</template>

<script>
    import SignUpHeaderComponent from '@/components/common/SignUpHeaderComponent.vue';
    import flatpickr from "flatpickr";
    import "flatpickr/dist/flatpickr.min.css";
    import { Korean } from "flatpickr/dist/l10n/ko.js"; // 한글 로케일 가져오기

    export default {
        name:'SignUp2',
        components: {
			SignUpHeaderComponent
		},
        data() {
            return {
                email: '',
                name: '',
                birth: '',
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
        },

        mounted() { //  npm install flatpickr 
            flatpickr(this.$refs.datepicker, {
                locale: Korean,
                dateFormat: "Y-m-d",

                onChange: (selectedDates, dateStr) => {
                    this.birth = dateStr;
                }
            });
        }    
    }
</script>

<style>
    /* flatpickr 커스텀 CSS */
    .flatpickr-calendar {
        font-family: 'yang-normal';
    }

    .flatpickr-day, .flatpickr-month, .flatpickr-weekdays {
        font-size: 0.75rem; /* 날짜와 월, 요일의 글자 크기 설정 */
    }

    .flatpickr-time input {
        font-size: 0.75rem; /* 시간 선택기 글자 크기 설정 */
    }

    .signup2_wrap {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width:360px;
		height:640px;
    }

    .signup2_wrap .input_inform{
        padding:1rem;
        
    }

    .signup2_wrap .input_inform .input_wrap{
        width:100%;
        margin-bottom:0.5rem;
        padding:0.25rem 0 0.25rem 0;
        border-bottom:1px solid #429EF5;
        box-sizing: border-box;
    }

    .signup2_wrap .input_inform .input_wrap input{
        border: none;      
        outline: none;     
        width:68%;
    }

    .signup2_wrap .input_inform .input_wrap #datepicker{
        cursor:pointer;
    }

    .signup2_wrap .input_inform .input_wrap .auth_btn{
        display:inline-block;
        margin-left:0.5rem;
        font-size:0.75rem;
        border:1px solid #B8B8B8;
        padding:0.25rem 0.25rem 0 0.25rem;
        width:80px;
        text-align: center;
        cursor:pointer;
        border-radius: 0.5rem;
    }

    .signup2_wrap .input_inform .choice_wrap{
        display: flex;
        margin-bottom:0.5rem;
        align-items: center;
        justify-content: space-between;
    }

    .signup2_wrap .input_inform .choice_wrap .choice-title{
        padding-top:0.25rem;
        font-size:0.8rem;
    }

    .signup2_wrap .input_inform .choice_wrap .gender-choice{
        margin-left:0.5rem;
        display:inline-block;
        width:85%;
        text-align: center;
        border:1px solid #B8B8B8;
        border-radius: 0.5rem;
        display: flex;
    }

    .signup2_wrap .input_inform .choice_wrap .gender-choice .gender{
        flex:1;
        cursor:pointer;
        padding-top:0.25rem;
    }

    .signup2_wrap .input_inform .choice_wrap .gender-choice .gender:hover{
        background-color: #B8B8B8;
        color:white;
    }

    .signup2_wrap .input_inform .choice_wrap .gender-choice .gender:first-child{
        border-right:1px solid #B8B8B8;
        border-radius: 0.4rem 0rem 0rem 0.4rem;
    }

    .signup2_wrap .input_inform .choice_wrap .gender-choice .gender:last-child{
        border-radius: 0rem 0.4rem 0.4rem 0rem;
    }
    
    .signup2_wrap .input_inform .choice_wrap #mbti{
        width:85%;
        height:30px;
        border:1px solid #B8B8B8;
        border-radius: 0.5rem;
        outline: none;  
        text-align: center;
        cursor:pointer;
    }
    
    .signup2_wrap .input_inform .int_wrap{
        text-align: center;
    }

    .signup2_wrap .input_inform .int_wrap span{
        display: inline-block;
        width:75px;
        height:20px;
        border-radius: 0.5rem;
        padding:0.25rem;
        margin:0.5rem 0.5rem 0.5rem 0;
        text-align: center;
        cursor:pointer;
        border:1px solid #B8B8B8;

    }

    .signup2_wrap .input_inform .int_wrap span:hover{
        color:white;
        background-color: #B8B8B8;
    }

    .signup2_wrap .btn_next{
		position: relative;
		bottom:-90px;
		text-align: center;
		margin: 0 auto;
		width: 320px;
		height: 30px;
		border-radius: 5px;
		cursor:pointer;
	}

	.signup2_wrap .btn_next .btn_txt{
		margin-top:0.25rem;
		display: inline-block;
	}
</style>