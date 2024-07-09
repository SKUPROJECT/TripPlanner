import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/components/login/LoginForm.vue'
import LoginSearch from '@/components/login/LoginSearch.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),  // 애플리케이션의 기본 URL을 설정하는 환경 변수 vue.config.js에서 설정 가능, 기본적으로 /(ROOT) 경로로 설정됨
    routes
})

export default router
