import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/views/login/LoginForm.vue'
import LoginSearch from '@/views/login/LoginSearch.vue'
import MyPage from '@/views/mypage/MyPage.vue'
import SignUp1 from '@/views/signup/SignUp1.vue'
import SignUp2 from '@/views/signup/SignUp2.vue'
import NameVerification from '@/views/signup/NameVerification.vue' 
import DoubleCheck from '@/views/signup/DoubleCheck.vue'

const routes = [
    /* 1. 로그인 창 */
    {
        path: '/',
        name: 'LoginForm',
        component: LoginForm
    },

    /* 2. 아이디/비밀번호 찾기 */
    {
        path: '/loginSearch',
        name: 'LoginSearch',
        component: LoginSearch
    },

    /* 3. 마이페이지 */
    {
        path: '/myPage',
        name: 'MyPage',
        component : MyPage
    },

    /* 4. 회원가입 창 */
    {
        path:'/signUp',
        name:'signUp',
        component : SignUp1
    },
    {
        path:'/SignUp2',
        name:'signUp2',
        component : SignUp2
    },
    {
        path:'/NameVerification',
        name:'nameVerification',
        component : NameVerification
    } ,
    {
        path:'/DoubleCheck',
        name:'doubleCheck',
        component : DoubleCheck
    } 
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),  // 애플리케이션의 기본 URL을 설정하는 환경 변수 vue.config.js에서 설정 가능, 기본적으로 /(ROOT) 경로로 설정됨
    routes
})

export default router
