import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import MessageView from '../views/MessageView.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/message',
    name: 'Message',
    component: MessageView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
