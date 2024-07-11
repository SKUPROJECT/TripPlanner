import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/views/login/LoginForm.vue'
import LoginSearch from '@/views/login/LoginSearch.vue'
import MyPage from '@/views/mypage/MyPage.vue'

const routes = [
    {
        path: '/',
        name: 'LoginForm',
        component: LoginForm
    },
    {
        path: '/loginSearch',
        name: 'LoginSearch',
        component: LoginSearch
    },
    {
        path: '/myPage',
        name: 'MyPage',
        component : MyPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),  // 애플리케이션의 기본 URL을 설정하는 환경 변수 vue.config.js에서 설정 가능, 기본적으로 /(ROOT) 경로로 설정됨
    routes
})

export default router
