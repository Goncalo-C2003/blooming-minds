import { createApp } from 'vue'
import HomeView from './views/HomeView.vue'
import router from './router'
import "@/css/main.css";

createApp(HomeView).use(router).mount('#app')