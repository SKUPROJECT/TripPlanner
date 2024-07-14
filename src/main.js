import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/css/comm.css'
import './assets/css/reset.css'

createApp(App).use(router).mount('#app');  // 라우터를 애플리케이션에 추가합니다.